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

function getSkillName(index) {
  return "Acrobatics";
}

function getSkillAbility(index) {
  return "DEX";
}

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

function getOtherSkillBonuses(ddch, skillName) {
  bonuses = 0;
  bonuses += 2 * (ddch.level0.skillBonus1 == skillName);
  bonuses += 2 * (ddch.level0.skillBonus2 == skillName);
  return bonuses;
}

function calcSkills(ddch, abilityScores, halfLevel) {
  allSkills = []
  trainings = ddch.level1.skillTrainings;
  for (var i = 0; i < 17; i++) {
    var skill = [];
    skillName = getSkillName(i);
    abilityUsed = getSkillAbility(i);
    
    skill.push(skillName);
    skill.push(abilityUsed);
    skill.push(getAbilityMod(abilityScores, abilityUsed) + halfLevel);
    skill.push(5 * ddch.level1.skillTrainings.includes(skillName));
    skill.push(getArmorCheckPenalty(ddch, abilityUsed));
    skill.push(getOtherSkillBonuses(ddch, skillName));
    skill.unshift(skill[2] + skill[3] + skill[4] + skill[5])
    allSkills.push(skill);
  }
  return allSkills;
}

app.post('/calculateValues', function(req, res) {
  var ddch = req.body;
  var cv = {}; //cv = Calculated Values
  
  // Placeholder Variables
  getSizeFromDataBase = 'M'
    
  cv.halfLevel = Math.floor(ddch.characterLevel / 2);
  cv.abilityScores = calcAbilityScores(ddch);
  cv.size = getSizeFromDataBase;
  cv.raceFeatures = "Race Stuff";
  cv.movement = "Movement Stuff";
  cv.initiative = "Initiative Stuff";
  cv.healthAndSavingThrows = "Health Stuff";
  cv.skills = calcSkills(ddch, cv.abilityScores, cv.halfLevel);
  cv.defenses = "Defense Stuff";
  cv.weaponProficiencies = "Weapon Stuff";
  cv.powers = "Power Stuff";
  
  ddch.calculatedValues = cv;
  res.json(ddch);
});
