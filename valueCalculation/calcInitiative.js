function getOtherInitiativeBonuses(ddch) {
  return 0;
}

module.exports.calculate = function(ddch, abilityScores) {
  var initiative = {};
  initiative.dex = abilityScores.dexMod;
  initiative.misc = getOtherInitiativeBonuses(ddch);
  return initiative;
}