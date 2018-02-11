var app = angular.module('app', []);
app.controller('mainController', ['$scope', '$http', function($scope, $http) {
	$scope.ddch = {
		level0: {
            name: "Kriv",
            level: "7",
            class: "Paladin",
            healthAndSavingThrows: {
                maxHP: 100,
                bloodiedHP: 50,
                surgeValue: 25,
                surgesPerDay: 8,
                savingThrowMods: "+2 Vs. Life",
                resistances: "Everything",
            },
            defenses: [
                {
                    score: 17,
                    def: "AC",
                    lvl: 10,
                    armor: 6,
                    class: undefined,
                    feat: undefined,
                    enh: undefined,
                    misc: 1
                },
                {
                    score: 15,
                    def: "FORT",
                    lvl: 10,
                    armor: 4,
                    class: 1,
                    feat: undefined,
                    enh: undefined,
                    misc: undefined
                },
                {
                    score: 13,
                    def: "REF",
                    lvl: 10,
                    armor: 2,
                    class: undefined,
                    feat: undefined,
                    enh: undefined,
                    misc: 1
                },
                {
                    score: 11,
                    def: "WILL",
                    lvl: 10,
                    armor: undefined,
                    class: 1,
                    feat: undefined,
                    enh: undefined,
                    misc: undefined
                }
            ],
            raceFeatures: [
                {
                    name: 'Dwarven Weapon Proficiency',
                    desc: 'Proficient with hammers.'
                },
                {
                    name: 'Cast-Iron Stomach',
                    desc: '+5 bonus to saving throws against poison.'
                },
                {
                    name: 'Encumbered Speed',
                    desc: 'Armor or heavy load does not reduce your speed.'
                },
                {
                    name: 'Dwarver Resilience',
                    desc: 'Second Wind is a minor action'
                },
                {
                    name: 'Stand Your Ground',
                    desc: 'Can move 1 less when being forced to move.'
                }
            ],
            initiative: {
                score: 2,
                dex: 0,
                lvl: 0,
                misc: 2
            },
        },
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
	$scope.log = function() {
		console.log($scope.ddch);
	};
	$scope.set_ddch = function() {
		console.log($scope.ddch);
        $scope.ddch.level0.healthAndSavingThrows.maxHP = "24";
	}
}]);	
