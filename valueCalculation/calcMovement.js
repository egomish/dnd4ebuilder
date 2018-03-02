var helperCalcs = require('./helperCalculations.js');

function getBaseMovementFromDatabase(race) {
  if (race == "Dwarf" || race == "Halfling") {
    return 5;
  }
  else {
    return 6;
  }
}

function getItemBonuses(magicItems) {
  return 0;
}

function getOtherMovementBonuses(ddch) {
  return 0;
}

module.exports.calculate = function(ddch) {
  var movement = {};
  movement.base = getBaseMovementFromDatabase(ddch.race);
  movement.armor = helperCalcs.getArmorCheckPenalty(ddch, "movement");
  movement.item = getItemBonuses(ddch.magicItems);
  movement.misc = getOtherMovementBonuses(ddch);
  return movement;
}