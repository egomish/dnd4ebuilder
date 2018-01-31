app.service('characterInfo', function() {
    this.character = {};
    
    this.get = function(key) {
        return this.character[key];
    };

    this.set = function(key, value) {
        this.character[key] = value;
    };

    this.getAll = function() {
        return this.character;
    };
});