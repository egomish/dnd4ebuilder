function getAbilityBonus(ddch, ability) {
  var bonus = 0;
  if (ddch.abilityBonus1 === ability || ddch.abilityBonus2 === ability) {
    bonus = 2;
  }
  return bonus;
}

module.exports.calculate = function(ddch) {
  var cv = {};
  var abs = ddch.level0.abilityScores[0];
  cv.strTotal = abs.baseStr + getAbilityBonus(ddch, "Strength");
  cv.strMod = Math.floor((cv.strTotal - 10) / 2);
  
  cv.conTotal = abs.baseCon + getAbilityBonus(ddch, "Constitution");
  cv.conMod = Math.floor((cv.conTotal - 10) / 2);
  
  cv.dexTotal = abs.baseDex + getAbilityBonus(ddch, "Dexterity");
  cv.dexMod = Math.floor((cv.dexTotal - 10) / 2);
  
  cv.intTotal = abs.baseInt + getAbilityBonus(ddch, "Intelligence");
  cv.intMod = Math.floor((cv.intTotal - 10) / 2);
  
  cv.wisTotal = abs.baseWis + getAbilityBonus(ddch, "Wisdom");
  cv.wisMod = Math.floor((cv.wisTotal - 10) / 2);
  
  cv.chaTotal = abs.baseCha + getAbilityBonus(ddch, "Charisma");
  cv.chaMod = Math.floor((cv.chaTotal - 10) / 2);
  return cv;
}