function getClassBaseHPFromDatabase(ddclass) {
  if (ddclass == "Wizard") {
    return 10;
  }
  else {
    return 12;
  }
}

function getSurgeBonuses(ddch) {
  return 0;
}

function getBaseSurgesPerDay(ddclass) {
  if (ddclass == "Wizard") {
    return 6;
  }
  else {
    return 7;
  }
}

function getSavingThrows(ddch) {
  return "";
}

function getResistances(ddch) {
  return "";
}

module.exports.calculate = function(ddch, abilityScores) {
  var healthAndSaves = {};
  healthAndSaves.maxHP = getClassBaseHPFromDatabase(ddch.level1.ddclass);
  healthAndSaves.maxHP += abilityScores.conTotal;
  healthAndSaves.bloodiedValue = Math.floor(healthAndSaves.maxHP / 2);
  healthAndSaves.surgeValue = Math.floor(healthAndSaves.maxHP / 4) + getSurgeBonuses(ddch);
  healthAndSaves.surgesPerDay = getBaseSurgesPerDay(ddch.level1.ddclass) + abilityScores.conMod;
  healthAndSaves.savingThrowsMods = getSavingThrows(ddch);
  healthAndSaves.resistances = getResistances(ddch);
  return healthAndSaves;
}