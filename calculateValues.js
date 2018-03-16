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
    // make sure this is called before getConModifier
    ddch.calculatedValues.defenses.fortitude.abilityMod = strmod;
    //TODO: handle ddch.calculatedValues.weaponProficiencies[i].damageMod
    getConTotal();
    getACBonus();
}

function getConTotal () {
    var racename = ddch.level0.ddrace;
    var basecon = ddch.level0.abilityScores.baseCon;
    var query = "SELECT conBonus FROM races " 
              + "WHERE name LIKE '" + racename + "';";
    con.query(query, function (err, result) {
      if (err) {
          database_error(err, query);
      } else {
          for (tuple in result) {
              conbonus = result[tuple].conBonus;
              ddch.calculatedValues.abilityScores.conTotal = basecon;
              ddch.calculatedValues.abilityScores.conTotal += conbonus;
              ddch.calculatedValues.healthAndSavingThrows.maxHP += ddch.calculatedValues.abilityScores.conTotal;
          }
      }
      getConModifier();
    });
}

function getConModifier () {
    var contotal = ddch.calculatedValues.abilityScores.conTotal;
    var conmod = getAbilMod(ddch.calculatedValues.abilityScores.conTotal);

    ddch.calculatedValues.abilityScores.conMod = conmod;
    ddch.calculatedValues.skills[6][3] = conmod;
    if (conmod > ddch.calculatedValues.defenses.fortitude.abilityMod)
      ddch.calculatedValues.defenses.fortitude.abilityMod = conmod;
    ddch.calculatedValues.healthAndSavingThrows.surgesPerDay += conmod;

    getDexTotal();
}

function getDexTotal () {
    var racename = ddch.level0.ddrace;
    var basedex = ddch.level0.abilityScores.baseDex;
    var query = "SELECT dexBonus FROM races " 
              + "WHERE name LIKE '" + racename + "';";
    con.query(query, function (err, result) {
      if (err) {
          database_error(err, query);
      } else {
          for (tuple in result) {
              dexbonus = result[tuple].dexBonus;
              ddch.calculatedValues.abilityScores.dexTotal = basedex;
              ddch.calculatedValues.abilityScores.dexTotal += dexbonus;
          }
      }
      getDexModifier();
    });
}

function getDexModifier () {
    var dextotal = ddch.calculatedValues.abilityScores.dexTotal;
    var dexmod = getAbilMod(ddch.calculatedValues.abilityScores.dexTotal);

    ddch.calculatedValues.abilityScores.dexMod = dexmod;
    ddch.calculatedValues.skills[0][3] = dexmod;
    ddch.calculatedValues.skills[14][3] = dexmod;
    ddch.calculatedValues.skills[16][3] = dexmod;
    ddch.calculatedValues.defenses.ac.abilityMod = dexmod;
    ddch.calculatedValues.defenses.reflex.abilityMod = dexmod;
    //TODO: handle ddch.calculatedValues.weaponProficiencies[i].damageMod
    
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

