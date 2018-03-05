var con;

module.exports.getEverythingFromDatabase = function (db, ddch, response) {
    con = db;
    getSize(ddch, response, database_error);
}

function getSize (ddch, response, error_callback) {
  var racename = ddch.level0.ddrace;
  var query = "SELECT size FROM races WHERE name LIKE '" + racename + "';";
  con.query(query, function (err, result) {
      if (err) {
        error_callback(err, query);
      } else {
        ddch.calculatedValues.size = result[0].size;
      }
      getACBonus(ddch, response, error_callback);
  });
}

function getACBonus (ddch, response, error_callback) {
  var classname = ddch.level1.ddclass;
  var query = "SELECT acBonus FROM classes WHERE name LIKE '" + classname + "';";
  con.query(query, function (err, result) {
      if (err) {
        error_callback(err, query);
      } else {
        ddch.calculatedValues.acBonus = result[0].acBonus;
      }
      completeResponse(ddch, response, error_callback);
  });
}

function completeResponse (ddch, response, error_callback) {
    response.json(ddch);
}

function database_error (err, query) {
  console.log("Database query \"" + query + "\" failed.");
}

