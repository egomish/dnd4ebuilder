module.exports.getAbilityMod = function(abilityScores, abilityUsed) {
  if (abilityUsed == "STR") {
    return abilityScores.strMod;
  }
  else if (abilityUsed == "CON") {
    return abilityScores.conMod;
  }
  else if (abilityUsed == "DEX") {
    return abilityScores.dexMod;
  }
  else if (abilityUsed == "INT") {
    return abilityScores.intMod;
  }
  else if (abilityUsed == "WIS") {
    return abilityScores.wisMod;
  }
  else {
    return abilityScores.chaMod;
  }
}

module.exports.getArmorCheckPenalty = function(ddch, abilityUsed) {
  return 0;
}