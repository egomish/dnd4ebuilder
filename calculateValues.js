var con;
var ddch;
var res;

module.exports.getEverythingFromDatabase = function (db, ddchar, response) {
    con = db;
    ddch = ddchar;
    res = response;
    getSize();
}

function getAbilMod (abilityscore) {
    return Math.floor((abilityscore - 10) / 2);
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
      getStrengthTotal();
    });
}

function getStrengthTotal () {
    var racename = ddch.level0.ddrace;
    var basestr = ddch.level0.abilityScores.baseStr;
    var query = "SELECT strBonus FROM races " 
              + "WHERE name LIKE '" + racename + "';";
    con.query(query, function (err, result) {
      if (err) {
          database_error(err, query);
      } else {
          for (tuple in result) {
              strbonus = result[tuple].strBonus;
              ddch.calculatedValues.abilityScores.strTotal = basestr;
              ddch.calculatedValues.abilityScores.strTotal += strbonus;
          }
      }
      getStrengthModifier();
    });
}

function getStrengthModifier () {
    var strtotal = ddch.calculatedValues.abilityScores.strTotal;
    var strmod = getAbilMod(ddch.calculatedValues.abilityScores.strTotal);

    ddch.calculatedValues.abilityScores.strMod = strmod;
    ddch.calculatedValues.skills[2][3] = strmod;
    ddch.calculatedValues.defenses.fortitude.abilityMod = strmod;
    //TODO: handle ddch.calculatedValues.weaponProficiencies[i].damageMod

    getACBonus();
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

