var con;
var ddch;
var res;

/*
 *  Requirement: Ability scores must be calculated in order: 
 *               STR, CON, DEX, INT, WIS, CHA.
 */

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
              var strbonus = result[tuple].strBonus;
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
    getConTotal();
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
              var conbonus = result[tuple].conBonus;
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
    if (conmod > ddch.calculatedValues.defenses.fortitude.abilityMod) {
        ddch.calculatedValues.defenses.fortitude.abilityMod = conmod;
    }
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
              var dexbonus = result[tuple].dexBonus;
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
    //TODO: prevent ability modfiier bonus when wearing heavy armor
    ddch.calculatedValues.defenses.ac.abilityMod = dexmod;
    ddch.calculatedValues.defenses.reflex.abilityMod = dexmod;
    //TODO: handle ddch.calculatedValues.weaponProficiencies[i].damageMod
    
    getIntTotal();
}

function getIntTotal () {
    var racename = ddch.level0.ddrace;
    var baseint = ddch.level0.abilityScores.baseInt;
    var query = "SELECT intBonus FROM races " 
              + "WHERE name LIKE '" + racename + "';";
    con.query(query, function (err, result) {
      if (err) {
          database_error(err, query);
      } else {
          for (tuple in result) {
              var intbonus = result[tuple].intBonus;
              ddch.calculatedValues.abilityScores.intTotal = baseint;
              ddch.calculatedValues.abilityScores.intTotal += intbonus;
          }
      }
      getIntModifier();
    });
}

function getIntModifier () {
    var inttotal = ddch.calculatedValues.abilityScores.intTotal;
    var intmod = getAbilMod(ddch.calculatedValues.abilityScores.intTotal);

    ddch.calculatedValues.abilityScores.intMod = intmod;
    ddch.calculatedValues.skills[1][3] = intmod;
    ddch.calculatedValues.skills[8][3] = intmod;
    ddch.calculatedValues.skills[13][3] = intmod;
    //TODO: prevent ability modfiier bonus when wearing heavy armor
    if (intmod > ddch.calculatedValues.abilityScores.dexMod) {
        ddch.calculatedValues.defenses.ac.abilityMod = intmod;
    }
    if (intmod > ddch.calculatedValues.defenses.reflex.abilityMod) {
        ddch.calculatedValues.defenses.reflex.abilityMod = intmod;
    }
    //TODO: handle ddch.calculatedValues.weaponProficiencies[i].damageMod
    
    getWisTotal();
}

function getWisTotal () {
    var racename = ddch.level0.ddrace;
    var basewis = ddch.level0.abilityScores.baseWis;
    var query = "SELECT wisBonus FROM races " 
              + "WHERE name LIKE '" + racename + "';";
    con.query(query, function (err, result) {
      if (err) {
          database_error(err, query);
      } else {
          for (tuple in result) {
              var wisbonus = result[tuple].wisBonus;
              ddch.calculatedValues.abilityScores.wisTotal = basewis;
              ddch.calculatedValues.abilityScores.wisTotal += wisbonus;
          }
      }
      getWisModifier();
    });
}

function getWisModifier () {
    var wistotal = ddch.calculatedValues.abilityScores.wisTotal;
    var wismod = getAbilMod(ddch.calculatedValues.abilityScores.wisTotal);

    ddch.calculatedValues.abilityScores.wisMod = wismod;
    ddch.calculatedValues.skills[5][3] = wismod;
    ddch.calculatedValues.skills[7][3] = wismod;
    ddch.calculatedValues.skills[9][3] = wismod;
    ddch.calculatedValues.skills[11][3] = wismod;
    ddch.calculatedValues.skills[12][3] = wismod;
    ddch.calculatedValues.defenses.will.abilityMod = wismod;
    
    getChaTotal();
}

function getChaTotal () {
    var racename = ddch.level0.ddrace;
    var basecha = ddch.level0.abilityScores.baseCha;
    var query = "SELECT chaBonus FROM races " 
              + "WHERE name LIKE '" + racename + "';";
    con.query(query, function (err, result) {
      if (err) {
          database_error(err, query);
      } else {
          for (tuple in result) {
              var chabonus = result[tuple].chaBonus;
              ddch.calculatedValues.abilityScores.chaTotal = basecha;
              ddch.calculatedValues.abilityScores.chaTotal += chabonus;
          }
      }
      getChaModifier();
    });
}

function getChaModifier () {
    var chatotal = ddch.calculatedValues.abilityScores.chaTotal;
    var chamod = getAbilMod(ddch.calculatedValues.abilityScores.chaTotal);

    ddch.calculatedValues.abilityScores.chaMod = chamod;
    ddch.calculatedValues.skills[3][3] = chamod;
    ddch.calculatedValues.skills[4][3] = chamod;
    ddch.calculatedValues.skills[10][3] = chamod;
    ddch.calculatedValues.skills[15][3] = chamod;
    if (chamod > ddch.calculatedValues.defenses.will.abilityMod) {
        ddch.calculatedValues.defenses.will.abilityMod = chamod;
    }
    
    completeResponse();
}

function completeResponse () {
    res.json(ddch);
}

function database_error (err, query) {
    console.log("Database query \"" + query + "\" failed.");
}

