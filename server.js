var express = require('express');
var app = express();
var port = 3000;
var upload = require('express-fileupload');
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(upload());

app.post('/character', function(req, res) {
    var filename = req.body.level0.name;
    if (filename === '') {
        filename = 'TestChar';
    }
    var ddch = fs.readFileSync('public/assets/' + filename + '.ddch');
    var jsonData = JSON.parse(ddch);
    console.log('responding to character POST request with ddch ' + filename);
    res.json(jsonData);
});

app.post('/uploadfile', function(req, res) {
	if(req.files) {
		var file = req.files.filetoupload;
		var filetoupload = file.name;
		file.mv('uploads/' + filetoupload, function(err) {
			if(err) {
				console.log(err);
				res.send("error occured");
			} else {
				var contents = fs.readFileSync("uploads/" + filetoupload);
				var jsonContent = JSON.parse(contents);
				res.json(jsonContent);
			}
		});
	}
});

app.listen(port, function() {
    console.log('Server app listening on port ' + port);
});

// Value Calculation Stuff, maybe move to another file?

// Ability Scores
function getAbilityBonus(ddch, ability) {
  var bonus = 0;
  if (ddch.abilityBonus1 === ability || ddch.abilityBonus2 === ability) {
    bonus = 2;
  }
  return bonus;
}

function calcAbilityScores(ddch) {
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

// General Use
function getAbilityMod(abilityScores, abilityUsed) {
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

function getArmorCheckPenalty(ddch, abilityUsed) {
  return 0;
}

// Skills
function getOtherSkillBonuses(ddch, skillName) {
  bonuses = 0;
  bonuses += 2 * (ddch.level0.skillBonus1 == skillName);
  bonuses += 2 * (ddch.level0.skillBonus2 == skillName);
  return bonuses;
}

function calcSkills(ddch, abilityScores, halfLevel) {
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
    skill.push(getAbilityMod(abilityScores, skillAbilitites[i]) + halfLevel);
    skill.push(5 * ddch.level1.skillTrainings.includes(skillNames[i]));
    skill.push(getArmorCheckPenalty(ddch, skillAbilitites[i]));
    skill.push(getOtherSkillBonuses(ddch, skillNames[i]));
    skill.unshift(skill[2] + skill[3] + skill[4] + skill[5])
    allSkills.push(skill);
  }
  return allSkills;
}

// Defenses
function getArmorBonus(ddch) {
  return 5;
}

function getHigherAbilityMod(abilityScores, abOne, abTwo) {
  var modOne = getAbilityMod(abilityScores, abOne);
  var modTwo = getAbilityMod(abilityScores, abTwo);
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

function calcDefenses(ddch, abilityScores) {
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
  
  console.log(allDefenses);
  return allDefenses;
}

// Calculation Home Function
app.post('/calculateValues', function(req, res) {
  var ddch = req.body;
  var cv = {}; //cv = Calculated Values
  
  // Placeholder Variables
  getSizeFromDatabase = 'M'
    
  cv.halfLevel = Math.floor(ddch.characterLevel / 2);
  cv.abilityScores = calcAbilityScores(ddch);
  cv.size = getSizeFromDatabase;
  cv.raceFeatures = {};
  cv.movement = {};
  cv.initiative = {};
  cv.healthAndSavingThrows = {};
  cv.skills = calcSkills(ddch, cv.abilityScores, cv.halfLevel);
  cv.defenses = calcDefenses(ddch, cv.abilityScores);
  cv.weaponProficiencies = {};
  cv.powers = {};
  
  ddch.calculatedValues = cv;
  res.json(ddch);
});
