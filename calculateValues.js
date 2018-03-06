var con;

module.exports.getEverythingFromDatabase = function (db, ddch, response) {
    con = db;
    getRaceBonuses(ddch, response, database_error);
}

/**************************
    Calculations

These functions do not
access the database. They
are called from the main
sequence.
***************************/

function calcAbilityScores(ddch) {
  ddch.calculatedValues.abilityScores = {};
  ddch.calculatedValues.abilityScores.strTotal = ddch.level0.abilityScores[0].baseStr + calcAbilityBonus(ddch, "Strength");
  ddch.calculatedValues.abilityScores.strMod = Math.floor((ddch.calculatedValues.abilityScoresstrTotal - 10) / 2);
  
  ddch.calculatedValues.abilityScores.conTotal = ddch.level0.abilityScores[0].baseCon + calcAbilityBonus(ddch, "Constitution");
  ddch.calculatedValues.abilityScores.conMod = Math.floor((ddch.calculatedValues.abilityScoresconTotal - 10) / 2);
  
  ddch.calculatedValues.abilityScores.dexTotal = ddch.level0.abilityScores[0].baseDex + calcAbilityBonus(ddch, "Dexterity");
  ddch.calculatedValues.abilityScores.dexMod = Math.floor((ddch.calculatedValues.abilityScoresdexTotal - 10) / 2);
  
  ddch.calculatedValues.abilityScores.intTotal = ddch.level0.abilityScores[0].baseInt + calcAbilityBonus(ddch, "Intelligence");
  ddch.calculatedValues.abilityScores.intMod = Math.floor((ddch.calculatedValues.abilityScoresintTotal - 10) / 2);
  
  ddch.calculatedValues.abilityScores.wisTotal = ddch.level0.abilityScores[0].baseWis + calcAbilityBonus(ddch, "Wisdom");
  ddch.calculatedValues.abilityScores.wisMod = Math.floor((ddch.calculatedValues.abilityScoreswisTotal - 10) / 2);
  
  ddch.calculatedValues.abilityScores.chaTotal = ddch.level0.abilityScores[0].baseCha + calcAbilityBonus(ddch, "Charisma");
  ddch.calculatedValues.abilityScores.chaMod = Math.floor((ddch.calculatedValues.abilityScoreschaTotal - 10) / 2);
}

function calcAbilityBonus(ddch, ability) {
  var totalBonus = 0;
  if (ddch.level0.abilityBonus1.includes(ability)) {
    var bonus = ddch.level0.abilityBonus1.split(' ');
    totalBonus += parseInt(bonus);
  }
  else if (ddch.level0.abilityBonus2.includes(ability)) {
    var bonus = ddch.level0.abilityBonus2.split(' ');
    totalBonus += parseInt(bonus);
  }
  return totalBonus;
}

/**************************
    Unsequenced Gets

These gets are performed
a variable amount of times,
and are called from the main
sequence.
****************************/

function getFeatureDetails (ddch, response, error_callback, featureName, featureArray) {
  var query = `SELECT benefit
               FROM features WHERE name LIKE '` + featureName + "'";
  con.query(query, function (err, result) {
      if (err) {
        error_callback(err, query);
      } else {
        // Give data the names raceFeatures.html expects.
        name = featureName;
        desc = result[0].benefit;
        featureArray.push({name, desc});
      }
  });
}

/**************************
    Sequenced Gets

This is the main sequence
of gets.
***************************/

/* Race-related Gets */
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
      /* We want to calculate ability scores ASAP because 
         later calculations will need them available. */
      calcAbilityScores(ddch);
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
        getFeatureDetails(ddch, response, error_callback, 
                          racialFeatures[i], ddch.calculatedValues.raceFeatures);
      }
      getSize(ddch, response, error_callback);
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
