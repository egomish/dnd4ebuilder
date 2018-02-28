var express = require('express');
var app = express();
var port = 3000;
var upload = require('express-fileupload');
var fs = require('fs');
var bodyParser = require('body-parser');

var abilityScores = require('./valueCalculation/calcAbilities.js');
var defenses = require('./valueCalculation/calcDefenses.js');
var skills = require('./valueCalculation/calcSkills.js');

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

// Value Calculation
app.post('/calculateValues', function(req, res) {
  var ddch = req.body;
  var cv = {}; //cv = Calculated Values
  
  // Placeholder Variables
  getSizeFromDatabase = 'M'
    
  cv.halfLevel = Math.floor(ddch.characterLevel / 2);
  cv.abilityScores = abilityScores.calculate(ddch);
  cv.size = getSizeFromDatabase;
  cv.raceFeatures = {};
  cv.movement = {};
  cv.initiative = {};
  cv.healthAndSavingThrows = {};
  cv.skills = skills.calculate(ddch, cv.abilityScores, cv.halfLevel);
  cv.defenses = defenses.calculate(ddch, cv.abilityScores);
  cv.weaponProficiencies = {};
  cv.powers = {};
  
  ddch.calculatedValues = cv;
  res.json(ddch);
});
