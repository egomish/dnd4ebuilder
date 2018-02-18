var express = require('express');
var app = express();
var port = 3000;
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

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

app.listen(port, function() {
    console.log('Server app listening on port ' + port);
});
