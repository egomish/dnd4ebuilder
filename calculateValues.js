var con;

module.exports.getEverythingFromDatabase = function (db, ddch, response) {
    con = db;
    getRaceBonuses(ddch, response, database_error);
}

function getRaceBonuses (ddch, response, error_callback) {
  var racename = ddch.level0.ddrace;
  var query = `SELECT abilityScoreBonus1, abilityScoreBonus2, skillBonus1, skillBonus2
               FROM races WHERE name LIKE '` + racename + "'";
  con.query(query, function (err, result) {
      if (err) {
        error_callback(err, query);
      } else {
        ddch.level0.abilityBonus1 = result[0].abilityScoreBonus1;
        ddch.level0.abilityBonus2 = result[0].abilityScoreBonus2;
        ddch.level0.skillBonus1 = result[0].skillBonus1;
        ddch.level0.skillBonus2 = result[0].skillBonus2;
      }
      getRaceFeatures(ddch, response, error_callback);
  });
}

function getRaceFeatures (ddch, response, error_callback) {
  var racename = ddch.level0.ddrace;
  var racialFeatures = [];
  var query = `SELECT racialFeatures
               FROM races WHERE name LIKE '` + racename + "'";
  con.query(query, function (err, result) {
      if (err) {
        error_callback(err, query);
      } else {
        racialFeatures = result[0].racialFeatures.split(", ");
      }
      ddch.calculatedValues.raceFeatures = [];
      for (var i = 0; i < racialFeatures.length; i++) {
        getRaceFeatureDetails(ddch, response, error_callback, racialFeatures[i]);
      }
      getSize(ddch, response, error_callback);
  });
}

function getRaceFeatureDetails (ddch, response, error_callback, featureName) {
  var query = `SELECT benefit
               FROM features WHERE name LIKE '` + featureName + "'";
  con.query(query, function (err, result) {
      if (err) {
        error_callback(err, query);
      } else {
        // Give data the names raceFeatures.html expects.
        name = featureName;
        desc = result[0].benefit;
        ddch.calculatedValues.raceFeatures.push({name, desc});
      }
  });
}

function getSize (ddch, response, error_callback) {
  var racename = ddch.level0.ddrace;
  var query = `SELECT size 
               FROM races WHERE name LIKE '` + racename + "'";
  con.query(query, function (err, result) {
      if (err) {
        error_callback(err, query);
      } else {
        ddch.calculatedValues.size = result[0].size;
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
