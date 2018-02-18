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
            description: {
                personalityTraits: "",
                mannerisms: "",
                background: ""
            },
            portrait: "images/no-profile-pic.png",

            alignment: "",
            deity: "",

            ddrace: "",
            abilityBonus1: "",
            abilityBonus2: "",
            skillBonus1: "",
            skillBonus2: "",
            abilityScores: [
                { 
                    baseStr: 10,
                    baseCon: 10,
                    baseDex: 10,
                    baseInt: 10,
                    baseWis: 10,
                    baseCha: 10
                }
            ],

            wealth: 0,
            equipment: [""],
            magicItems: {
                weapons: [
                    'Axe',
                    'Long Sword',
                    'Bigger Axe',
                    'Longer Long Sword'
                ],
                armor: '',
                arms: '',
                feet: '',
                hands: '',
                head: '',
                neck: '',
                leftRing: '',
                rightRing: '',
                waist: ''
            },

            languages: ["Common", "Undercommon", ""],
            rituals: ["","","","","","","","","",""],
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
            size: "M",
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
                    name: 'Dwarven Resilience',
                    desc: 'Second Wind is a minor action'
                },
                {
                    name: 'Stand Your Ground',
                    desc: 'Can move 1 less when being forced to move.'
                }
            ],
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
            speed: {
                armor: 0,
                item: 0,
                misc: 0
            },
            weaponProficiencies: {
                toHit: [],
                damageDice: [],
                toDam: []
            },
            powers: [
                {
                    name: "Commander's Strike",
                    usage: "At-Will",
                    actionType: "Standard Action",
                    source: "PHB1",
                    target: "One creature",
                    flavor: "With a shout, you command an ally to attack.",
                    "elements": [
                        ["Keywords", "Martial, Weapon"],
                        ["Effect", "One of your allies can take a free action to make a melee basic attack against the target. The ally gains a bonus to the damage roll equal to your Int modifier."],
                    ],
                },
                {
                    name: "Overwhelming Force Trap",
                    usage: "Encounter",
                    actionType: "Immediate Interrupt",
                    source: "Dr384",
                    target: "Close burst 3",
                    flavor: "You keep the order to spring the trap ready, allowing your allies sto spring into action on a moment's notice.",
                    "elements": [
                        ["Keywords", "Martial"],
                        ["Trigger", "An ally in the burst makes a melee basic attack"],
                        ["Effect", "The target uses one of their melee at-will attack powers instead of making a melee basic attack. If the attack hits, the subbect of the target's attack is also dazed until the end of the target's next turn."],
                    ],
                },
            ],
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