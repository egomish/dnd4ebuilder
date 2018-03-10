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
      getRaceFeatures();
  });
}

function getRaceFeatures () {
    ddch.calculatedValues.raceFeatures = [];
    var racename = ddch.level0.ddrace;
    var query = "SELECT name, benefit FROM features " 
              + "WHERE origin LIKE '" + racename + "';";
    con.query(query, function (err, result) {
      if (err) {
          database_error(err, query);
      } else {
          for (tuple in result) {
              var feature = {};
              feature.name = result[tuple].name;
              feature.desc = result[tuple].benefit;
              ddch.calculatedValues.raceFeatures[tuple] = feature;
          }
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

