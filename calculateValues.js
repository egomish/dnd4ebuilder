var con;
var ddch;
var res;

module.exports.getEverythingFromDatabase = function (db, ddchar, response) {
    con = db;
    ddch = ddchar;
    res = response;
    getSize();
}

function getSize () {
  var racename = ddch.level0.ddrace;
  var query = "SELECT size FROM races WHERE name LIKE '" + racename + "';";
  con.query(query, function (err, result) {
      if (err) {
        database_error(err, query);
      } else {
        ddch.calculatedValues.size = result[0].size;
      }
      getACBonus();
  });
}

function getACBonus () {
  var classname = ddch.level1.ddclass;
  var query = "SELECT acBonus FROM classes WHERE name LIKE '" + classname + "';";
  con.query(query, function (err, result) {
      if (err) {
        database_error(err, query);
      } else {
        ddch.calculatedValues.acBonus = result[0].acBonus;
      }
      completeResponse();
  });
}

function completeResponse () {
    res.json(ddch);
}

function database_error (err, query) {
  console.log("Database query \"" + query + "\" failed.");
}

