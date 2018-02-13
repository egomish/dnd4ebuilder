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
            equipment: [""],

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
            abilityScores: [
                { 
                    base_str: 10,
                    base_con: 10,
                    base_dex: 10,
                    base_int: 10,
                    base_wis: 10,
                    base_cha: 10
                }
            ]
        },
        level1: {
            ddclass: "",
            skillTrainings: [],
            classFeatures: [
                {
                    name: "Combat Leader",
                    desc: "You and allies within 10 that see and hear you gain +2 to initiative."
                },
                {
                    name: "Tactical Presence",
                    desc: "Ally you can see that spends an action point to attack gains bonus to attack: 1/2 int mod."
                },
                {
                    name: "Inspiring Word",
                    desc: "Use inspiring word as an encounter (special) power, minor action."
                }
            ],
            atwillPower1: "",
            atwillPower2: "",
            encounterPower: "",
            dailyPower: "",
            ddfeat: { 
                name: "Toughness", 
                desc: "Gain 5 additional hit points per tier" 
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
            movement: {
                base: 5,
                armor: 0,
                item: 0,
                misc: 0
            },
            initiative: {
                dex: 0,
                misc: 0
            },
            abilityScores: {
                strTotal: 10,
                conTotal: 10,
                dexTotal: 10,
                intTotal: 10,
                wisTotal: 10,
                chaTotal: 10,
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
