var helperCalcs = require('./helperCalculations.js');

function getArmorBonus(ddch) {
  return 5;
}

function getHigherAbilityMod(abilityScores, abOne, abTwo) {
  var modOne = helperCalcs.getAbilityMod(abilityScores, abOne);
  var modTwo = helperCalcs.getAbilityMod(abilityScores, abTwo);
  if (modOne > modTwo) {
    return modOne;
  }
  else {
    return modTwo;
  }
}

function getClassDefenses(ddch, defName) {
  return 1;
}

function getFeatDefenses(ddch, defName) {
  return 2;
}

function getDefenseEnchacements(ddch, defName) {
  return 0;
}

function getDefenseMiscellany(ddch, defName) {
  return 1;
}

module.exports.calculate = function(ddch, abilityScores) {
  var allDefenses = {};
  var defenseData = [["ac", "DEX", "DEX"],
                     ["fortitude", "STR", "CON"],
                     ["reflex", "DEX", "INT"],
                     ["will", "WIS", "CHA"]];
  
  // A range-based for loop didn't work here for some reason.
  for (var i = 0; i < 4; i++) {
    defData = defenseData[i];
    var defense = {};
    if (defData[0] == "ac") {
      defense.armor = getArmorBonus(ddch);
    }
    defense.abilityMod = getHigherAbilityMod(abilityScores, defData[1], defData[2]);
    defense.class = getClassDefenses(ddch, defData[0]);
    defense.feat = getFeatDefenses(ddch, defData[0]);
    defense.enhancement = getDefenseEnchacements(ddch, defData[0]);
    defense.misc = getDefenseMiscellany(ddch, defData[0]);
    allDefenses[defData[0]] = defense;
  }
  
  return allDefenses;
}