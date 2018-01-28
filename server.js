var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/races', function(req, res) {
    var races = [
        {name: 'Human', description: 'Boring ass shit'},
        {name: 'Dwarf', description: 'short guy'},
        {name: 'Elf', description: 'guy with big ears'},
        {name: 'Klingon', description: 'cool guy'}  
    ];
    var message = {
        body: races
    };
    res.json(message);
});

app.get('/classes', function(req, res) {
    var classes = [
        {name: 'Fighter', description: 'basic ass bitch'},
        {name: 'Wizard', description: 'a motherfucking sorcerer'},
        {name: 'Tank', description: 'fat guy'}
    ];
    var message = {
        body: classes
    };
    res.json(message);
});

app.listen(3000, function() {
    console.log('App listening on port 3000');
});