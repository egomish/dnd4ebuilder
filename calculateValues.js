var con;
var res;

module.exports.getEverythingFromDatabase = function (db, ddch, response) {
    con = db;
    res = response;
    getSize(ddch);
}

function getSize (ddch) {
  var racename = ddch.level0.ddrace;
  var query = "SELECT size FROM races WHERE name LIKE '" + racename + "';";
  con.query(query, function (err, result) {
      if (err) {
        database_error(err, query);
      } else {
        ddch.calculatedValues.size = result[0].size;
      }
      getACBonus(ddch);
  });
}

function getACBonus (ddch) {
  var classname = ddch.level1.ddclass;
  var query = "SELECT acBonus FROM classes WHERE name LIKE '" + classname + "';";
  con.query(query, function (err, result) {
      if (err) {
        database_error(err, query);
      } else {
        ddch.calculatedValues.acBonus = result[0].acBonus;
      }
      completeResponse(ddch);
  });
}

function completeResponse (ddch) {
    res.json(ddch);
}

function database_error (err, query) {
  console.log("Database query \"" + query + "\" failed.");
}

