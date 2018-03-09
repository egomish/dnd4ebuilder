INSERT INTO races(
	name,
	synopsis,
	description,
	minHeight,
	maxHeight,
	minWeight,
	maxWeight,
	abilityScoreBonus1,
	abilityScoreBonus2,
	size,
	vision,
	numberOfLanguages,
	skillBonus1,
	skillBonus2,
	racialFeatures
)
VALUES(
	'DragonBorn', /* name */
	'Proud, honorable warriors, born from the blood of an ancient dragon god', /* synopsis */
	"Born to fight, dragonborn are a race of wandering mercenaries, soldiers, and 
	adventurers. Long ago, their empire contended for worldwide dominion, but now only 
	a few rootless clans of these honorable warriors remain to pass on their legends of 
	ancient glory.", /* description */
	"6'2''", /* min height */
	"6'8''", /* max height */
	220, /* min weight */
	320, /* max weight */
	'+2 Strength', /* ability score bonus 1 */
	'+2 Charisma', /* ability score bonus 2 */
	'medium', /* size */
	'Normal', /* vision */
	2, /* number of languages */
	'+2 History', /* skill bonus 1 */
	'+2 Intimidate', /* skill bonus 2 */
	'DragonBorn Fury, Draconis Heritage, Dragon Breath' /* race features */
); 

INSERT INTO classes(
 	name,
 	synopsis,
 	description,
 	role,
 	powerSource,
 	keyAbilityScores,
 	armorProficiencies,
 	weaponProficiencies,
 	implements,
 	acBonus,
 	fortBonus,
 	reflexBonus,
 	willBonus,
 	level1HP,
 	perLevelHP,
 	surges,
 	numberOfSkills,
 	builds,
 	classFeatures
)
VALUES(
	'Warlord', /* name */
	'Onward to victory! They cannot stand before us!', /* synopsis */
	"Warlords are accomplished and competent battle leaders. Warlords stand on the front 
	line issuing commands and bolstering their allies while leading the battle with weapon 
	in hand. Warlords know how to rally a team to win a fight. Your ability to lead others to 
	victory is a direct result of your history. You could be a minor warchief looking to make 
	a name for yourself, a pious knightcommander on leave from your militant order, a youthful
	 noble eager to apply years of training to life outside the castle walls, a calculating 
	 mercenary captain, or a courageous marshal of the borderlands who fights to protect the 
	 frontier. Regardless of your background, you are a skillful warrior with an uncanny gift
	  for leadership. The weight of your armor is not a hindrance; it is a familiar comfort. 
	  The worn weapon grip molds to your hand as if it were a natural extension of your arm. 
	  It’s time to fight and to lead.", /* description */
	'Leader. You are an inspiring commander and a master of battle tactics', /* role */
	'Martial. You have become an expert in tactics through endless hours of training and  
	practice, personal determination, and your own sheer physical toughness. ', /* power source */
	' Strength, Intelligence, Charisma', /* key ability scores */
	' Cloth, leather, hide, chainmail; light shield ', /* armor proficiencies */
	'Simple melee, military melee, simple ranged ', /* weapon proficiencies */
	NULL, /* implements */
	0, /* ac */
	1, /* fort */
	0, /* reflex */
	1, /* will */
	12, /* lvl 1 HP */
	5, /* per level HP */
	7, /* surges */
	4, /* number of skills */
	'Inspiring warlord, tactical warlor', /* builds */
	' Combat Leader, Commanding Presence, inspiring word' /* class features */
);

/* class features */
INSERT INTO features(
	name,
	kind,
	prerequisites,
	benefit,
	special
)
VALUES(
	'Combat Leader',
	'class',
	NULL,
	"You and each ally 
	within 10 squares who can see and hear you gain a +2 power bonus to initiative.",
	NULL
);

INSERT INTO features(
	name,
	kind,
	prerequisites,
	benefit,
	special
)
VALUES(
	'Commanding Presence ',
	'class',
	NULL,
	"Choose one of the following two benefits. Inspiring Presence: When an 
	ally who can see you spends an action point to take an extra action, that
	 ally also regains lost hit points equal to one-half your level + your 
	 Charisma modifier. Tactical Presence: When an ally you can see spends an action 
	 point to make an extra attack, the ally gains a bonus to the attack roll equal 
	 to one-half your Intelligence modifier. The choice you make also provides bonuses 
	 to certain warlord powers. Individual powers detail the effects (if any) your 
	 Commanding Presence selection has on them. ",
	NULL
);

INSERT INTO features(
	name,
	kind,
	prerequisites,
	benefit,
	special
)
VALUES(
	'Inspiring Word',
	'class',
	NULL,
	"Using the inspiring word power, warlords can grant their comrades additional 
	resilience with nothing more than a shout of encouragement. ",
	NULL
);

INSERT INTO features(
	name,
	kind,
	prerequisites,
	benefit,
	special
)
VALUES(
	'Dragonborn Fury',
	'race',
	NULL,
	"When you’re bloodied, you gain a +1 racial bonus to attack rolls. ",
	NULL
);

INSERT INTO features(
	name,
	kind,
	prerequisites,
	benefit,
	special
)
VALUES(
	'Draconic Heritage: ',
	'race',
	NULL,
	"Your healing surge value is equal to one-quarter of your maximum hit points 
	+ your Constitution modifier. ",
	NULL
);

INSERT INTO features(
	name,
	kind,
	prerequisites,
	benefit,
	special
)
VALUES(
	'Dragon Breath: ',
	'race',
	NULL,
	" You can use dragon breath as an encounter power.",
	NULL
);

INSERT INTO features(
	name,
	kind,
	prerequisites,
	benefit,
	special
)
VALUES(
	'Dragonborn Frenzy',
	'feat',
	'Dragonborn',
	" While you are bloodied, you gain a +2 bonus to damage rolls.",
	NULL
);

INSERT INTO powers(
 	name,
 	powerUsage,
 	actionType,
 	powerType,
 	kind,
 	source,
 	flavor,
 	level,
 	hit,
 	miss,
 	effect,
 	special,
 	keyWords,
 	target,
 	requirement,
 	attack,
 	powerTrigger,
 	powerRange
 )
VALUES(
 	'Dragon Breath ',
 	'encounter',
 	'Minor Action',
 	'racial',
 	'race',
 	'PHB1',
 	'As you open your mouth with a roar, the deadly power of your draconic kin blasts forth 
 	to engulf your foes.',
 	0,
 	" 1d6 + Constitution modifier damage.  Increase to +4 bonus and 2d6 + Constitution 
 	modifier damage at 11th level, and to +6 bonus and 3d6 + Constitution modifier damage 
 	at 21st level. ", /* hit */
 	NULL, /* miss */
 	NULL, /* effect */
 	"When you create your character, choose Strength, Constitution, or Dexterity as the 
 	ability score you use when making attack rolls with this power. You also choose the 
 	power’s damage type: acid, cold, fire, lightning, or poison. These two choices remain 
 	throughout your character’s life and do not change the power’s other effects", /* special */
 	"Acid, Cold, Fire, Lightning, or Poison", /* keyWords */
 	" All creatures in area ",  /* target */
 	NULL,	/* requirement */
 	" Strength + 2 vs. Reflex, Constitution + 2 vs. Reflex, or Dexterity + 2 vs. Reflex ", /* attack */
 	NULL, /* trigger */
 	'Close blast 3' /* powerRange */
 );

INSERT INTO powers(
 	name,
 	powerUsage,
 	actionType,
 	powerType,
 	kind,
 	source,
 	flavor,
 	level,
 	hit,
 	miss,
 	effect,
 	special,
 	keyWords,
 	target,
 	requirement,
 	attack,
 	powerTrigger,
 	powerRange
 )
VALUES(
 	'Inspiring Word',
 	'encounter',
 	'Minor Action',
 	NULL,
 	'Warlord Feature',
 	'PHB1',
 	'You call out to a wounded ally and offer inspiring words of courage and 
 	determination that helps that ally heal.',
 	0,
 	NULL,/* hit */
 	NULL, /* miss */
 	"The target can spend a healing surge and regain an additional 1d6 hit points. 
 	The amount of additional hit points regained is 2d6 at 6th level, 3d6 at 11th level, 
 	4d6 at 16th level, 5d6 at 21st level, and 6d6 at 26th level.", /* effect */
 	'You can use this power twice per encounter, but only once per round. At 16th level, 
 	you can use inspiring word three times per encounter.', /* special */
 	' Martial, Healing', /* keyWords */
 	' You or one ally in burst ',  /* target */
 	NULL,	/* requirement */
 	NULL, /* attack */
 	NULL, /* trigger */
 	'Close burst 5   (10 at 11th level, 15 at 21st level) ' /* powerRange */
 );

INSERT INTO powers(
 	name,
 	powerUsage,
 	actionType,
 	powerType,
 	kind,
 	source,
 	flavor,
 	level,
 	hit,
 	miss,
 	effect,
 	special,
 	keyWords,
 	target,
 	requirement,
 	attack,
 	powerTrigger,
 	powerRange
)
VALUES(
 	'Commanders Strike',
 	'at-will',
 	'standard',
 	'attack',
 	'class',
 	'PHB1',
 	'With a shout, you command an ally to attack.',
 	1,
 	'Ally’s basic attack damage + your Intelligence modifier', /* hit */
 	NULL, /* miss */
 	NULL, /* effect */
 	NULL, /* special */
 	'Martial,Weapon', /* keyWords */
 	'One creature',  /* target */
 	NULL,	/* requirement */
 	' An ally of your choice makes a melee basic attack against the target ', /* attack */
 	NULL, /* trigger */
 	'Melee Weapon' /* powerRange */
);

INSERT INTO powers(
 	name,
 	powerUsage,
 	actionType,
 	powerType,
 	kind,
 	source,
 	flavor,
 	level,
 	hit,
 	miss,
 	effect,
 	special,
 	keyWords,
 	target,
 	requirement,
 	attack,
 	powerTrigger,
 	powerRange
 )
VALUES(
 	'Furious Smash ',
 	'at-will',
 	'standard',
 	'attack',
 	'class',
 	'PHB1',
 	'You slam your shield into your enemy, bash him with your weapon’s haft, or drive 
 	your shoulder into his gut. Your attack doesn’t do much damage—but your anger inspires 
 	your ally to match your ferocity.',
 	1,
 	' Deal damage equal to your Strength modifier, and then choose one ally adjacent to 
 	either you or the target. This ally applies your Charisma modifier as a power bonus 
 	to the attack roll and the damage roll on his or her next attack against the target. 
 	If the ally does not attack the target by the end of his or her next turn, the bonus 
 	is lost.', /* hit */
 	NULL, /* miss */
 	NULL, /* effect */
 	NULL, /* special */
 	'Martial,Weapon', /* keyWords */
 	'One creature',  /* target */
 	NULL,	/* requirement */
 	'Strength vs. Fortitude', /* attack */
 	NULL, /* trigger */
 	'Melee Weapon' /* powerRange */
 );

INSERT INTO powers(
 	name,
 	powerUsage,
 	actionType,
 	powerType,
 	kind,
 	source,
 	flavor,
 	level,
 	hit,
 	miss,
 	effect,
 	special,
 	keyWords,
 	target,
 	requirement,
 	attack,
 	powerTrigger,
 	powerRange
 )
VALUES(
 	'Hammer and Anvil',
 	'encounter',
 	'standard',
 	'attack',
 	'class',
 	'PHB1',
 	'You land a ringing blow against your foe, inspiring a nearby ally to strike a 
 	blow of his own.',
 	1,
 	' 1[W] + Strength modifier damage. One ally adjacent to the target makes a melee 
 	basic attack against it as a free action. The ally adds your Charisma modifier to 
 	the damage.', /* hit */
 	NULL, /* miss */
 	NULL, /* effect */
 	NULL, /* special */
 	'Martial, Weapon', /* keyWords */
 	'One creature',  /* target */
 	NULL,	/* requirement */
 	' Strength vs. Reflex ', /* attack */
 	NULL, /* trigger */
 	'Melee weapon' /* powerRange */
 );

INSERT INTO powers(
 	name,
 	powerUsage,
 	actionType,
 	powerType,
 	kind,
 	source,
 	flavor,
 	level,
 	hit,
 	miss,
 	effect,
 	special,
 	keyWords,
 	target,
 	requirement,
 	attack,
 	powerTrigger,
 	powerRange
 )
VALUES(
 	'Pin the Foe ',
 	'daily',
 	'standard',
 	'attack',
 	'class',
 	'PHB1',
 	'No matter where your foe turns, one of your allies is waiting for him.',
 	1,
 	' 3[W] + Strength modifier damage', /* hit */
 	NULL, /* miss */
 	'Until the end of the encounter, the target cannot shift if at least two of 
 	your allies (or you and one ally) are adjacent to it.', /* effect */
 	NULL, /* special */
 	'Martial, Weapon', /* keyWords */
 	'One creature',  /* target */
 	NULL,	/* requirement */
 	'Strength vs. AC', /* attack */
 	NULL, /* trigger */
 	'Melee weapon' /* powerRange */
 );

INSERT INTO deities(
	name,
	alignment,
	description
)
VALUES(
	'Bahamut',
	'Lawful Good ',
	'Called the Platinum Dragon, Bahamut is the god of justice, protection, nobility, and 
	honor. Lawful good paladins often revere him, and metallic dragons worship him as the 
	first of their kind. Monarchs are crowned in his name. He commands his followers thus: 
	✦ Uphold the highest ideals of honor and justice. 
	✦ Be constantly vigilant against evil and oppose it on all fronts. 
	✦ Protect the weak, liberate the oppressed, and defend just order.'
);

INSERT INTO alignments(
	name,
	synopsis,
	description
)
VALUES(
	'Lawful Good',
	' Civilization and order',
	'If you’re lawful good, you respect the authority of personal codes of conduct, laws, and leaders, and you believe that those codes are the best way of achieving your ideals. Just authority promotes the well-being 
	ROLEPLAYING of its subjects and prevents them from harming one another. Lawful good 
	characters believe just as strongly as good ones do in the value of life, and they 
	put even more emphasis on the need for the powerful to protect the weak and lift up the 
	downtrodden. The exemplars of the lawful good alignment are shining champions of what’s 
	right, honorable, and true, risking or even sacrificing their lives to stop the spread of 
	evil in the world. When leaders exploit their authority for personal gain, when laws grant 
	privileged status to some citizens and reduce others to slavery or untouchable status, law 
	has given in to evil and just authority becomes tyranny. You are not only capable of 
	challenging such injustice, but morally bound to do so. However, you would prefer to work 
	within the system to right such problems rather than resorting to more rebellious and 
	lawless methods. '
);

INSERT INTO items(
	name,
	type,
	level,
	prof,
	damage,
	weaponRange,
	purchasePrice,
	salePrice,
	weight,
	weaponGroup,
	properties,
	categories,
	carryingCapacity,
	armorBonus,
	minimumEnhancementBonus,
	armorCheck,
	speed,
	powerLevel,
	armorGroup,
	weaponCategory
)
VALUES(
	'Chainmail', /* name */
	'Armor', /* type */
	NULL, /* level */
	NULL, /* prof */
	NULL, /* damage */
	NULL, /* range */
	40, /* purchase price */
	NULL, /* sale price */
	40, /* weight */
	NULL, /* weapon group */
	NULL, /* properties */
	NULL, /* categories */
	NULL, /* carrying capacity */
	6, /* armor bonus */
	NULL, /* minimum enhancement bonus */
	1, /* armor check */
	1, /* speed */
	NULL, /* power level */
	'Chainmail (Heavy)', /* armorGroup */
	NULL  /* weaponCategory */
);

INSERT INTO items(
	name,
	type,
	level,
	prof,
	damage,
	weaponRange,
	purchasePrice,
	salePrice,
	weight,
	weaponGroup,
	properties,
	categories,
	carryingCapacity,
	armorBonus,
	minimumEnhancementBonus,
	armorCheck,
	speed,
	powerLevel, 
	armorGroup,
	weaponCategory
)
VALUES(
	'Longsword', /* name */
	'Weapon', /* type */
	NULL, /* level */
	3, /* prof */
	'1d8', /* damage */
	NULL, /* range */
	15, /* purchase price */
	NULL, /* sale price */
	4, /* weight */
	'One-Handed', /* weapon group */
	'Versatile', /* properties */
	NULL, /* categories */
	NULL, /* carrying capacity */
	NULL, /* armor bonus */
	NULL, /* minimum enhancement bonus */
	NULL, /* armor check */
	NULL, /* speed */
	NULL, /* power level */
	NULL, /* armorGroup */
	'MILITARY MELEE WEAPONS '  /* weaponCategory */
);

INSERT INTO items(
	name,
	type,
	level,
	prof,
	damage,
	weaponRange,
	purchasePrice,
	salePrice,
	weight,
	weaponGroup,
	properties,
	categories,
	carryingCapacity,
	armorBonus,
	minimumEnhancementBonus,
	armorCheck,
	speed,
	powerLevel,
	armorGroup,
	weaponCategory
)
VALUES(
	'Light Shield', /* name */
	'Shield', /* type */
	NULL, /* level */
	NULL, /* prof */
	NULL, /* damage */
	NULL, /* range */
	5, /* purchase price */
	NULL, /* sale price */
	6, /* weight */
	NULL, /* weapon group */
	NULL, /* properties */
	NULL, /* categories */
	NULL, /* carrying capacity */
	1, /* armor bonus */
	NULL, /* minimum enhancement bonus */
	NULL, /* armor check */
	NULL, /* speed */
	NULL, /* power level */
	'Shields', /* armorGroup */
	NULL /* weaponCategory */
);
