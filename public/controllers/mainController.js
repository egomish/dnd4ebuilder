var app = angular.module('app', []);
app.controller('mainController', ['$scope', '$http', function($scope, $http) {
	$scope.ddch = {
        characterLevel: 1,
        halflevel: 0,
        level0: {
            name: "",
            age: 0,
            gender: "",
            height: 0,
            weight: 0,
            size: "",
            description: {
                personalityTraits: "",
                mannerisms: "",
                background: ""
            },
            portrait: "",

            alignment: "",
            deity: "",

            ddrace: "",
            abilityBonus1: "",
            abilityBonus2: "",
            skillBonus1: "",
            skillBonus2: "",
            racialFeatures: [
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
                    name: 'Dwarven Resilience',
                    desc: 'Second Wind is a minor action'
                },
                {
                    name: 'Stand Your Ground',
                    desc: 'Can move 1 less when being forced to move.'
                }
            ],
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
            halfLevel: 0,
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
                chaMod: 0,
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
                modifierBonuses: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                trainedBonuses: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                armorPenalties: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                miscBonuses: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
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
