var con;

module.exports.getEverythingFromDatabase = function (db, ddch, response) {
    con = db;
    getRaceBonuses(ddch, response, database_error);
}

/**************************
    Helper Calculations

These functions do not
access the database. They
are called from other
calculation functions.
***************************/
function calcSearchForFeaturesWithKeyword(ddch, keyword) {
  var featuresWithKeyword = [];
  for (var i = 0; i < ddch.calculatedValues.raceFeatures.length; i++) {
    feature = ddch.calculatedValues.raceFeatures[i];
    if (feature.desc.includes(keyword)) {
      featuresWithKeyword.push(feature);
    }
  }
  for (var i = 0; i < ddch.level1.classFeatures.length; i++) {
    feature = ddch.level1.classFeatures[i];
    if (feature.desc.includes(keyword)) {
      featuresWithKeyword.push(feature);
    }
  }
  // Also needs to search through feats and magic items eventually
  return featuresWithKeyword;
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

// Needed because of Dragonborns (and maybe others?)
function calcSurgeValueBonus(ddch) {
  var totalBonus = 0;
  var featuresWithBonuses = calcSearchForFeaturesWithKeyword(ddch, "surge value");
  for (var i = 0; i < featuresWithBonuses.length; i++) {
    if(featuresWithBonuses[i].includes("Constitution")) {
      totalBonus += ddch.calculatedValues.abilityScores.conMod;
    }
    else {
      totalBonus += parseInt(featuresWithBonuses[i]);
    }
  }
  return totalBonus;
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
  ddch.calculatedValues.abilityScores.strMod = Math.floor((ddch.calculatedValues.abilityScores.strTotal - 10) / 2);
  
  ddch.calculatedValues.abilityScores.conTotal = ddch.level0.abilityScores[0].baseCon + calcAbilityBonus(ddch, "Constitution");
  ddch.calculatedValues.abilityScores.conMod = Math.floor((ddch.calculatedValues.abilityScores.conTotal - 10) / 2);
  
  ddch.calculatedValues.abilityScores.dexTotal = ddch.level0.abilityScores[0].baseDex + calcAbilityBonus(ddch, "Dexterity");
  ddch.calculatedValues.abilityScores.dexMod = Math.floor((ddch.calculatedValues.abilityScores.dexTotal - 10) / 2);
  
  ddch.calculatedValues.abilityScores.intTotal = ddch.level0.abilityScores[0].baseInt + calcAbilityBonus(ddch, "Intelligence");
  ddch.calculatedValues.abilityScores.intMod = Math.floor((ddch.calculatedValues.abilityScores.intTotal - 10) / 2);
  
  ddch.calculatedValues.abilityScores.wisTotal = ddch.level0.abilityScores[0].baseWis + calcAbilityBonus(ddch, "Wisdom");
  ddch.calculatedValues.abilityScores.wisMod = Math.floor((ddch.calculatedValues.abilityScores.wisTotal - 10) / 2);
  
  ddch.calculatedValues.abilityScores.chaTotal = ddch.level0.abilityScores[0].baseCha + calcAbilityBonus(ddch, "Charisma");
  ddch.calculatedValues.abilityScores.chaMod = Math.floor((ddch.calculatedValues.abilityScores.chaTotal - 10) / 2);
}

function calcHealthValues(ddch, baseHP, perLevelHP) {
  ddch.calculatedValues.healthAndSavingThrows = {};
  
  ddch.calculatedValues.healthAndSavingThrows.maxHP =
    baseHP + 
    ddch.calculatedValues.abilityScores.conTotal +
    perLevelHP * ddch.characterLevel;
          
  ddch.calculatedValues.healthAndSavingThrows.bloodiedValue =
    Math.floor(ddch.calculatedValues.healthAndSavingThrows.maxHP / 2);
    
  ddch.calculatedValues.healthAndSavingThrows.surgeValue =
    Math.floor(ddch.calculatedValues.healthAndSavingThrows.maxHP / 4) +
    calcSurgeValueBonus(ddch);
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
      getClassFeatures(ddch, response, error_callback);
  });
}

/* Class Feature Gets */
function getClassFeatures (ddch, response, error_callback) {
  var classname = ddch.level1.ddclass;
  var classFeatures = [];
  var query = `SELECT classFeatures
               FROM classes WHERE name LIKE '` + classname + "'";
  con.query(query, function (err, result) {
      if (err) {
        error_callback(err, query);
      } else {
        classFeatures = result[0].classFeatures.split(", ");
      }
      ddch.level1.classFeatures = [];
      for (var i = 0; i < classFeatures.length; i++) {
        getFeatureDetails(ddch, response, error_callback, 
                          classFeatures[i], ddch.level1.classFeatures);
      }
      getHealth(ddch, response, error_callback);
  });
}

/* Feat and Magic Item gets should go here,
   before health & defense-related gets */

/* Health-related Gets */

// Fills all maxHP-related values (maxHP, bloodiedValue, surgeValue)
function getHealth (ddch, response, error_callback) {
  var classname = ddch.level1.ddclass;
  var query = `SELECT level1HP, perLevelHP 
               FROM classes WHERE name LIKE '` + classname + "'";
  con.query(query, function (err, result) {
      if (err) {
        error_callback(err, query);
      } else {
        baseHP = result[0].level1HP;
        perLevelHP = result[0].perLevelHP;
      }
      calcHealthValues(ddch, baseHP, perLevelHP);
      getSurgesPerDay(ddch, response, error_callback);
  });
}

function getSurgesPerDay(ddch, response, error_callback) {
  var classname = ddch.level1.ddclass;
  var query = `SELECT surges
               FROM classes WHERE name LIKE '` + classname + "'";
  con.query(query, function (err, result) {
      if (err) {
        error_callback(err, query);
      } else {
        ddch.calculatedValues.healthAndSavingThrows.surgesPerDay =
          result[0].surges;
      }
      // Saves & Resistance calculation functions will be called here.
      completeResponse(ddch, response, error_callback);
  });
}

/**************************
    Utility Functions

Functions whose roles don't
fit in with the other ones.
***************************/
function completeResponse (ddch, response, error_callback) {
    response.json(ddch);
}

function database_error (err, query) {
  console.log("Database query \"" + query + "\" failed.");
}
