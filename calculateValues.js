var raceData = require('./valueCalculation/calcRaceData.js');
var con;

module.exports.getEverythingFromDatabase = function (db, ddch, response) {
    con = db;
    raceData.getEverythingFromDatabase(ddch, con, response, database_error);
}

function database_error (err, query) {
  console.log("Database query \"" + query + "\" failed.");
}
