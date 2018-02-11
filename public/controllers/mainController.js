var app = angular.module('app', []);
app.controller('mainController', ['$scope', '$http', function($scope, $http) {
	$scope.ddch = {
        characterLevel: 1,
        level0: {
            name: "",
            age: 0,
            gender: "",
            height: 0,
            weight: 0,
            description: "",
            portrait: "",

            alignment: "",
            deity: "",

            ddrace: "",
            abilityBonus1: "",
            abilityBonus2: "",
            skillBonus1: "",
            skillBonus2: "",
            racialFeatures: [],
            abilityScores: []
        },
        level1: {
            ddclass: "",
            skillTrainings: [],
            classFeatures: [],
            ddfeat: "",
            atwillPower1: "",
            atwillPower2: "",
            encounterPower: "",
            dailyPower: "",
            ddfeat: ""
        },
        level2: {
            utilityPower: "",
            ddfeat: ""
        },
        level3: {
            encounterPower: ""
        },
        level4: {
            abilityScoreBonus1: "",
            abilityScoreBonus2: "",
            ddfeat: ""
        },
        level5: {
            dailyPower: ""
        },
        level6: {
            utilityPower: "",
            ddfeat: ""
        },
        level7: {
            encounterPower: ""
        },
        level8: {
            abilityScoreBonus1: "",
            abilityScoreBonus2: "",
            ddfeat: ""
        },
        level9: {
            dailyPower: ""
        },
        level10: {
            utilityPower: "",
            ddfeat: ""
        },
        calculatedValues: {
            initiative: {
                dex: 0,
                halflevel: 0,
                misc: 0
            },
            abilityScores: {
                strMod: 0,
                conMod: 0,
                dexMod: 0,
                intMod: 0,
                wisMod: 0,
                chaMod: 0,
                halflevel: 0
            },
            healthAndSavingThrows: {
                maxHP: 0,
                bloodiedValue: 0,
                surgeValue: 0,
                surgesPerDay: 0,
                savingThrowMods: "",
                resistances: ""
            },
            skills: {
                totals: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                modifierBonuses: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                trainedBonuses: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                armorPenalties: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                miscBonuses: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            defenses: {
                ac: {
                    tenPlusHalfLevel: 0,
                    armor: 0,
                    abilityMod: 0,
                    class: 0,
                    feat: 0,
                    enhancement: 0,
                    misc: 0
                },
                fortitude: {
                    tenPlusHalfLevel: 0,
                    abilityMod: 0,
                    class: 0,
                    feat: 0,
                    enhancement: 0,
                    misc: 0
                },
                reflex: {
                    tenPlusHalfLevel: 0,
                    abilityMod: 0,
                    class: 0,
                    feat: 0,
                    enhancement: 0,
                    misc: 0
                },
                will: {
                    tenPlusHalfLevel: 0,
                    abilityMod: 0,
                    class: 0,
                    feat: 0,
                    enhancement: 0,
                    misc: 0
                },
            },
            speed: {
                armor: 0,
                item: 0,
                misc: 0
            },
            weaponProficiencies: {
                toHit: [],
                damageDice: [],
                toDam: []
            }
        }
	};

	$scope.log = function() {
		console.log($scope.ddch);
	};
	$scope.set_ddch = function() {
		console.log($scope.ddch);
        $scope.ddch.level0.healthAndSavingThrows.maxHP = "24";
	}
}]);	
