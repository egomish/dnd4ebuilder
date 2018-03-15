var express = require('express');
var app = express();
var port = 3000;
var upload = require('express-fileupload');
var fs = require('fs');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var calculate = require('./calculateValues.js');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(upload());

var con = mysql.createConnection ({
    host: "sql3.freemysqlhosting.net",
    user: "sql3222527",
    password: "leANL4iLIN",
    database: "sql3222527"
});

con.connect(function (err) {
    if (err) {
        console.log("Connection to database failed")
    } else {
        console.log("Connected to database");
    }
});

app.get('/premades', function(req, res) {
	fs.readdir('./public/assets/', function(err, items) {
		var premades = [];
	    for(var i=0; i<items.length; i++) {
	    	if(items[i].split('.')[1] == 'ddch') {
	    		premades.push(items[i].split('.')[0]);
	    	}
	    }
	    res.json(premades);
	});
});

app.post('/character', function(req, res) {
    var filename = req.body.name;
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
				fs.unlink('uploads/'+filetoupload, function(err) {
					if (err) {
						throw err;
					}
				});
				res.json(jsonContent);
			}
		});
	}
});

app.listen(port, function() {
    console.log('Server app listening on port ' + port);
});

app.post('/calculateValues', function(req, res) {
  var ddch = req.body;
  ddch.calculatedValues = {};
  calculate.getEverythingFromDatabase(con, ddch, res);
});

// modal queries
app.get('/races', function(req, res) {
	con.query('SELECT name, description FROM races', function(err, result) {
		if(err) {
			throw err;
		} else {
			res.json(result);
		}
	});
});