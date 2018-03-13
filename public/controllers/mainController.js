var app = angular.module('app', ['ui.bootstrap']);
app.controller('mainController', ['$scope', '$http', '$window', '$modal', function($scope, $http, $window, $modal) {
    $scope.ddch = {
        characterLevel: undefined,
        level0: {
            name: undefined,
            age: undefined,
            gender: undefined,
            height: undefined,
            weight: undefined,
            description: {
                personalityTraits: undefined,
                mannerisms: undefined,
                background: undefined
            },
            portrait: "assets/no-profile-pic.png",

            alignment: undefined,
            deity: undefined,

            ddrace: undefined,
            abilityBonus1: "",
            abilityBonus2: "",
            skillBonus1: "",
            skillBonus2: "",
            abilityScores: [
                { 
                    baseStr: 0,
                    baseCon: 0,
                    baseDex: 0,
                    baseInt: 0,
                    baseWis: 0,
                    baseCha: 0
                }
            ],

            wealth: {
                cp: 0,
                sp: 0,
                gp: 0,
                pp: 0,
                ad: 0,
                other: []
            },
            equipment: [""],
            magicItems: {
                weapons: [],
                armor: "",
                arms: "",
                feet: "",
                hands: "",
                head: "",
                neck: "",
                leftRing: "",
                rightRing: "",
                waist: "",
                misc: []
            },

            languages: [],
            rituals: ["", ""],
        },
        level1: {
            ddclass: "",
            skillTrainings: [],
            classFeatures: [],
            atwillPower1: "",
            atwillPower2: "",
            encounterPower: "",
            dailyPower: "",
            ddfeat: { 
                name: "", 
                desc: "" 
            }
        },
        level2: {
            utilityPower: "",
            ddfeat: { 
                name: "", 
                desc: "" 
            }
        },
        level3: {
            encounterPower: ""
        },
        level4: {
            abilityScoreBonus1: "",
            abilityScoreBonus2: "",
            ddfeat: { 
                name: "", 
                desc: "" 
            }
        },
        level5: {
            dailyPower: ""
        },
        level6: {
            utilityPower: "",
            ddfeat: { 
                name: "", 
                desc: "" 
            }
        },
        level7: {
            encounterPower: ""
        },
        level8: {
            abilityScoreBonus1: "",
            abilityScoreBonus2: "",
            ddfeat: { 
                name: "", 
                desc: "" 
            }
        },
        level9: {
            dailyPower: ""
        },
        level10: {
            utilityPower: "",
            ddfeat: { 
                name: "", 
                desc: "" 
            }
        },
        calculatedValues: {
            halfLevel: 0,
            size: "",
            raceFeatures: [],
            movement: {
                base: 0,
                armor: 0,
                item: 0,
                misc: 0
            },
            initiative: {
                dex: 0,
                misc: 0
            },
            abilityScores: {
                strTotal: 0,
                conTotal: 0,
                dexTotal: 0,
                intTotal: 0,
                wisTotal: 0,
                chaTotal: 0,
                strMod: 0,
                conMod: 0,
                dexMod: 0,
                intMod: 0,
                wisMod: 0,
                chaMod: 0
            },
            healthAndSavingThrows: {
                maxHP: 0,
                bloodiedValue: 0,
                surgeValue: 0,
                surgesPerDay: 0,
                savingThrowMods: [""],
                resistances: [""]
            },
            skills: [
                [0, "Acrobatics",    "DEX", 0, 0, 0, 0],
                [0, "Arcana",        "INT", 0, 0, 0, 0],
                [0, "Athletics",     "STR", 0, 0, 0, 0],
                [0, "Bluff",         "CHA", 0, 0, 0, 0],
                [0, "Diplomacy",     "CHA", 0, 0, 0, 0],
                [0, "Dungeoneering", "WIS", 0, 0, 0, 0],
                [0, "Endurance",     "CON", 0, 0, 0, 0],
                [0, "Heal",          "WIS", 0, 0, 0, 0],
                [0, "History",       "INT", 0, 0, 0, 0],
                [0, "Insight",       "WIS", 0, 0, 0, 0],
                [0, "Intimidate",    "CHA", 0, 0, 0, 0],
                [0, "Nature",        "WIS", 0, 0, 0, 0],
                [0, "Perception",    "WIS", 0, 0, 0, 0],
                [0, "Religion",      "INT", 0, 0, 0, 0],
                [0, "Stealth",       "DEX", 0, 0, 0, 0],
                [0, "Streetwise",    "CHA", 0, 0, 0, 0],
                [0, "Thievery",      "DEX", 0, 0, 0, 0],
            ],
            defenses: {
                ac: {
                    armor: 0,
                    abilityMod: 0,
                    class: 0,
                    feat: 0,
                    enhancement: 0,
                    misc: 0
                },
                fortitude: {
                    abilityMod: 0,
                    class: 0,
                    feat: 0,
                    enhancement: 0,
                    misc: 0
                },
                reflex: {
                    abilityMod: 0,
                    class: 0,
                    feat: 0,
                    enhancement: 0,
                    misc: 0
                },
                will: {
                    abilityMod: 0,
                    class: 0,
                    feat: 0,
                    enhancement: 0,
                    misc: 0
                },
            },
            weaponProficiencies: [
                {
                    attack: 0,
                    defType: "",
                    name: "",
                    damageDice: "",
                    damageMod: 0
                },
            ],
            powers: [
                {
                    name: "",
                    usage: "",
                    actionType: "",
                    source: "",
                    target: "",
                    flavor: "",
                    elements: []
                }
            ],
        }
    };

    $scope.init = function() {
        console.log('called init');
        $scope.selectedPremade = 'Dresden';
        $http.get('/premades').then(function(response) {
            $scope.premades = response.data;
        }, function (error) {
            console.log('could not GET premades from server.');
        });
    };

    $scope.allFeatsUndefined = function() {
        return (
            $scope.ddch.level1.ddfeat.name == "" && $scope.ddch.level1.ddfeat.desc == "" &&
            $scope.ddch.level2.ddfeat.name == "" && $scope.ddch.level2.ddfeat.desc == "" &&
            $scope.ddch.level4.ddfeat.name == "" && $scope.ddch.level4.ddfeat.desc == "" &&
            $scope.ddch.level6.ddfeat.name == "" && $scope.ddch.level6.ddfeat.desc == "" &&
            $scope.ddch.level8.ddfeat.name == "" && $scope.ddch.level8.ddfeat.desc == "" &&
            $scope.ddch.level10.ddfeat.name == "" && $scope.ddch.level10.ddfeat.desc == ""
        );
    };

    $scope.set_premade = function() {
         $http.post('/character', {name: $scope.selectedPremade}).then(function(response) {
            $scope.ddch = response.data;
        }, function (error) {
            console.log('could not GET character from server.');
        });
    };

    $scope.log = function() {
        console.log($scope.ddch);
    };
    $scope.set_ddch = function() {
        $http.post('/character', $scope.ddch).then(function(response) {
            $scope.ddch = response.data;
        }, function (error) {
            console.log('could not GET character from server.');
        });

    }

    //file uploading
    $(document).ready(function() {
        $("form#data").submit(function(e) {
            e.preventDefault();    
            var formData = new FormData(this);

            $.ajax({
                url: '/uploadfile',
                type: 'POST',
                data: formData,
                success: function (data) {
                    $scope.ddch = data;
                    $scope.$apply();
                },
                cache: false,
                contentType: false,
                processData: false
            });
        });
    });

    // file downloading
    $scope.download = function () {
        var data = $scope.ddch;
        delete data['calculatedValues'];
        var filename = $scope.ddch.level0.name + '.ddch';

        if (!data) {
            console.error('No data');
            return;
        }

        if (typeof data === 'object') {
            data = JSON.stringify(data, undefined, 2);
        }

        var blob = new Blob([data], {type: 'text/json'});

        // FOR IE:

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
        }
        else{
            var e = document.createEvent('MouseEvents'),
            a = document.createElement('a');

            a.download = filename;
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
            e.initEvent('click');
            a.dispatchEvent(e);
        }
    };
}]);
