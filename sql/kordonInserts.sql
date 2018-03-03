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
	'Dwarf', /* name */
	'Masters of stone and iron, dauntless and unyielding in the face of adversity', /* synopsis */
	'Carved from the bedrock of the universe, dwarves endured an age of servitude to giants before 
	winning their freedom. Their mighty mountain fortress-cities testify to the power of their ancient empires. 
	Even those who live in human cities are counted among the staunchest defenders against the darkness that 
	threat- ens to engulf the world.', /* description */
	"4'3''", /* min height */
	"4'9''", /* max height */
	160, /* min weight */
	220, /* max weight */
	'+2 Constitution', /* ability score bonus 1 */
	'+2 Wisdom', /* ability score bonus 2 */
	'medium', /* size */
	'low light', /* vision */
	2, /* number of languages */
	'+2 Dungeoneering', /* skill bonus 1 */
	'+2 Endurance', /* skill bonus 2 */
	'Cast-Iron Stomach, Dwarven Resilience, Dwarven Weapon Proficiency, Encumbered Speed, Stand Your Ground' /* race features */
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
	'Fighter', /* name */
	'You’ll have to deal with me first, dragon!', /* synopsis */
	"Fighters are determined combat adepts trained to pro- tect the other members of their adventuring groups. 
	Fighters define the front line by bashing and slicing foes into submission while reflecting enemy attacks 
	through the use of heavy armor. Fighters draw weap- ons for gold, for glory, for duty, and for the mere joy 
	of unrestrained martial exercise. Regardless of your level of skill and the specific weapons you eventually 
	master, your motivations determine who you defend and who you slay. You could be a noble champion who pledges 
	your blade to gallant causes, a calculating mercenary who cares more for the clink of gold than praise, a 
	homeless prince on the run from assassins, or a blood-loving thug looking for the next good fight.
	Your future is yours. When you unsheathe your weapon, what battle cry flies from your lips?", /* description */
	'Defender. You are very tough and have the excep-
	tional ability to contain enemies in melee.', /* role */
	'Arcane. You channel arcane forces through extensive study, hidden knowledge, and intricate preparation. 
	To you, magic is an art form, an expressive and powerful method by which you seek to control the world around you.', /* power source */
	'Strength, Dexterity, Wisdom, Constitution', /* key ability scores */
	'Cloth, leather, hide, chainmail, scale; light shield, heavy shield', /* armor proficiencies */
	'Simple melee, military melee, simple ranged, military ranged', /* weapon proficiencies */
	NULL, /* implements */
	0, /* ac */
	2, /* fort */
	0, /* reflex */
	0, /* will */
	15, /* lvl 1 HP */
	6, /* per level HP */
	9, /* surges */
	3, /* number of skills */
	'Great weapon fighter, guardian fighter', /* builds */
	'Combat Challenge, Combat Superiority, Fighter Weapon Talent' /* class features */
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
	'Combat Challenge',
	'class',
	NULL,
	"In combat, it’s dangerous to ignore a fighter. Every time you attack an enemy, whether the attack hits or misses, 
	you can choose to mark that target. The mark lasts until the end of your next turn. While a target
	is marked, it takes a –2 penalty to attack rolls for any attack that doesn’t include you as a target. 
	A creature can be subject to only one mark at a time. A new mark supersedes a mark that was already in place.
	In addition, whenever a marked enemy that is adjacent to you shifts or makes an attack that does not include you, 
	you can make a melee basic attack against that enemy as an immediate interrupt.",
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
	'Combat Superiority',
	'class',
	NULL,
	"You gain a bonus to opportunity attacks equal to your Wisdom modifier. 
	An enemy struck by your oppor- tunity attack stops moving, if a move provoked the attack. 
	If it still has actions remaining, it can use them to resume moving.",
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
	'Fighter Weapon Talent',
	'class',
	NULL,
	"Choose either one-handed or two-handed weapons. When using a weapon of your chosen style, 
	you gain a +1 bonus to attack rolls.",
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
	'Cast-Iron Stomach',
	'race',
	NULL,
	"+5 racial bonus to saving throws against poison.",
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
	'Dwarven Resilience',
	'race',
	NULL,
	"You can use your second wind as a minor action instead of a standard action.",
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
	'Dwarven Weapon Proficiency',
	'race',
	NULL,
	"You gain proficiency with the throwing hammer and the warhammer.",
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
	'Encumbered Speed',
	'race',
	NULL,
	"You move at your normal speed even when it would normally be reduced by armor or a heavy load. 
	Other effects that limit speed (such as difficult terrain or magical effects) affect you normally.",
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
	'Stand Your Ground',
	'race',
	NULL,
	"When an effect forces you to move—through a pull, a push, or a slide—you can move 1 square less than the effect specifies. 
	This means an effect that normally pulls, pushes, or slides a target 1 square does not force you to move unless you want to. 
	In addition, when an attack would knock you prone, you can immediately make a saving throw to avoid falling prone.",
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
	'Toughness',
	'feat',
	NULL,
	"Gain 5 additional hit points per tier",
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
 	powerTrigger
 )
VALUES(
 	'Sure Strike',
 	'at-will',
 	'standard',
 	'attack',
 	'class',
 	'PHB1',
 	'You trade power for precision.',
 	1,
 	'1[W] damage. Increase damage to 2[W] at 21st level.', /* hit */
 	NULL, /* miss */
 	NULL, /* effect */
 	NULL, /* special */
 	NULL, /* keyWords */
 	'One creature',  /* target */
 	NULL,	/* requirement */
 	'Strength + 2 vs. AC', /* attack */
 	NULL /* trigger */
 );
