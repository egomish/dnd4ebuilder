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

app.post('/calculateValues', function(req, res) {
  var ddch = req.body;
  var cv = {}; //cv = Calculated Values
    
  cv.halfLevel = Math.floor(ddch.characterLevel / 2);
  cv.size = "Size Stuff";
  cv.raceFeatures = "Race Stuff";
  cv.movement = "Movement Stuff";
  cv.initiative = "Initiative Stuff";
  cv.abilityScores = "Ability Stuff";
  cv.healthAndSavingThrows = "Health Stuff";
  cv.skills = "Skills Stuff";
  cv.defenses = "Defense Stuff";
  cv.weaponProficiencies = "Weapon Stuff";
  cv.powers = "Power Stuff";
  
  console.log(cv);
  ddch.calculatedValues = cv;
  res.json(ddch);
});

app.listen(port, function() {
    console.log('Server app listening on port ' + port);
});
