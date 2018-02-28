var helperCalcs = require('./helperCalculations.js');

function getOtherSkillBonuses(ddch, skillName) {
  bonuses = 0;
  bonuses += 2 * (ddch.level0.skillBonus1 == skillName);
  bonuses += 2 * (ddch.level0.skillBonus2 == skillName);
  return bonuses;
}

module.exports.calculate = function(ddch, abilityScores, halfLevel) {
  var allSkills = []
  var trainings = ddch.level1.skillTrainings;
  
  var skillNames = ["Acrobatics", "Arcana", "Athletics",
                    "Bluff", "Diplomacy", "Dungeoneering",
                    "Endurance", "Heal", "History",
                    "Insight", "Intimidate", "Nature",
                    "Perception", "Religion", "Stealth",
                    "Streetwise", "Thievery"];
  
  var skillAbilitites = ["DEX", "INT", "STR",
                         "CHA", "CHA", "WIS",
                         "CON", "WIS", "INT",
                         "WIS", "CHA", "WIS",
                         "WIS", "INT", "DEX",
                         "CHA", "DEX"];
  
  for (var i = 0; i < 17; i++) {
    var skill = [];
    skill.push(skillNames[i]);
    skill.push(skillAbilitites[i]);
    skill.push(helperCalcs.getAbilityMod(abilityScores, skillAbilitites[i]) + halfLevel);
    skill.push(5 * ddch.level1.skillTrainings.includes(skillNames[i]));
    skill.push(helperCalcs.getArmorCheckPenalty(ddch, skillAbilitites[i]));
    skill.push(getOtherSkillBonuses(ddch, skillNames[i]));
    skill.unshift(skill[2] + skill[3] + skill[4] + skill[5])
    allSkills.push(skill);
  }
  return allSkills;
}