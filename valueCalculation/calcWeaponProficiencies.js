var helperCalcs = require('./helperCalculations.js');

function getAbilityUsed(weapon) {
  return "STR";
}

function isProficientWithWeapon(ddch, weapon) {
  return true;
}

function getProficiencyBonusFromDataBase(weapon) {
  return 2;
}

function getMagicItemBonus(weapon) {
  return 0;
}

function getWeaponDefenseType(weapon) {
  return "AC";
}

function getDamageDice(weapon) {
  return "1d8";
}

function getWeaponsHeldByCharacter(ddch) {
  return [""];
}

function getOtherBonuses(ddch, weapon, isAttack) {
  var bonus = 0;
  if (isAttack && isProficientWithWeapon(ddch, weapon)) {
    bonus += getProficiencyBonusFromDataBase(weapon);
  }
  bonus += getMagicItemBonus(weapon);
  return bonus;
}

module.exports.calculate = function(ddch, abilityScores, halfLevel) {
  var allWpnProfs = [];
  var weapons = getWeaponsHeldByCharacter(ddch);
  for (wpn in weapons) {
    var wpnProf = {};
    var abilityMod = helperCalcs.getAbilityMod(getAbilityUsed(wpn));
    wpnProf.attack = abilityMod + halfLevel + getOtherBonuses(ddch, wpn, true);
    wpnProf.defType = getWeaponDefenseType(wpn);
    wpnProf.name = wpn;
    wpnProf.damageDice = getDamageDice(wpn);
    wpnProf.damageMod = abilityMod + getOtherBonuses(ddch, wpn);
    allWpnProfs.push(wpnProf);
  }
  return allWpnProfs;
}