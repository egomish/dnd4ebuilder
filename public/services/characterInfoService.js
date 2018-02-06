app.service('characterInfo', function() {
    this.character = {
        level0: {},
        level1: {},
        level2: {},
        level3: {},
        level4: {},
        level5: {},
        level6: {},
        level7: {},
        level8: {},
        level9: {},
        level10: {}
    };
    
    this.get = function(key) {
        return this.character[key];
    };

    this.set = function(level, attr, value) {
        this.character[level][attr] = value;
    };

    this.getAll = function() {
        return this.character;
    };
});