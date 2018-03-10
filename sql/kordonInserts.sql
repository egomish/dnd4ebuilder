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
	speed,
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
	5, /* speed */
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
	origin,
	prerequisites,
	benefit,
	special
)
VALUES(
	'Combat Challenge',
	'class',
	'Fighter',
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
	origin,
	prerequisites,
	benefit,
	special
)
VALUES(
	'Combat Superiority',
	'class',
	'Fighter',
	NULL,
	"You gain a bonus to opportunity attacks equal to your Wisdom modifier. 
	An enemy struck by your oppor- tunity attack stops moving, if a move provoked the attack. 
	If it still has actions remaining, it can use them to resume moving.",
	NULL
);

INSERT INTO features(
	name,
	kind,
	origin,
	prerequisites,
	benefit,
	special
)
VALUES(
	'Fighter Weapon Talent',
	'class',
	'Fighter',
	NULL,
	"Choose either one-handed or two-handed weapons. When using a weapon of your chosen style, 
	you gain a +1 bonus to attack rolls.",
	NULL
);

INSERT INTO features(
	name,
	kind,
	origin,
	prerequisites,
	benefit,
	special
)
VALUES(
	'Cast-Iron Stomach',
	'race',
	'Dwarf',
	NULL,
	"+5 racial bonus to saving throws against poison.",
	NULL
);

INSERT INTO features(
	name,
	kind,
	origin,
	prerequisites,
	benefit,
	special
)
VALUES(
	'Dwarven Resilience',
	'race',
	'Dwarf',
	NULL,
	"You can use your second wind as a minor action instead of a standard action.",
	NULL
);

INSERT INTO features(
	name,
	kind,
	origin,
	prerequisites,
	benefit,
	special
)
VALUES(
	'Dwarven Weapon Proficiency',
	'race',
	'Dwarf',
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
	origin,
	prerequisites,
	benefit,
	special
)
VALUES(
	'Stand Your Ground',
	'race',
	'Dwarf',
	NULL,
	"When an effect forces you to move—through a pull, a push, or a slide—you can move 1 square less than the effect specifies. 
	This means an effect that normally pulls, pushes, or slides a target 1 square does not force you to move unless you want to. 
	In addition, when an attack would knock you prone, you can immediately make a saving throw to avoid falling prone.",
	NULL
);

INSERT INTO features(
	name,
	kind,
	origin,
	prerequisites,
	benefit,
	special
)
VALUES(
	'Toughness',
	'feat',
	NULL,
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
 	powerTrigger,
 	powerRange
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
 	NULL, /* trigger */
 	'Melee' /* range */
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
 	'Cleave',
 	'at-will',
 	'standard',
 	'attack',
 	'class',
 	'PHB1',
 	'You hit one enemy, then cleave into another.',
 	1,
 	'1[W] + Strength modifier damage, and an enemy adjacent to you takes damage equal to your Strength modifier. Increase damage to 2[W] + Strength modifier at 21st level.', /* hit */
 	NULL, /* miss */
 	NULL, /* effect */
 	NULL, /* special */
 	NULL, /* keyWords */
 	'One creature',  /* target */
 	NULL,	/* requirement */
 	'Strength vs. AC', /* attack */
 	NULL, /* trigger */
 	'Melee'
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
 	'Spinning Sweep',
 	'encounter',
 	'standard',
 	'attack',
 	'class',
 	'PHB1',
 	'You spin beneath your enemy’s guard with a long, powerful cut, 
 	and then sweep your leg through his an instant later to knock him head over heels.',
 	1,
 	'1[W] + Strength modifier damage, and you knock the target prone.', /* hit */
 	NULL, /* miss */
 	NULL, /* effect */
 	NULL, /* special */
 	NULL, /* keyWords */
 	'One creature',  /* target */
 	NULL,	/* requirement */
 	'Strength vs. AC', /* attack */
 	NULL, /* trigger */
 	'Melee' /* range */
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
 	'Brute Strike',
 	'daily',
 	'standard',
 	'attack',
 	'class',
 	'PHB1',
 	' You shatter armor and bone with a ringing blow.',
 	1,
 	'3[W] + Strength modifier damage.', /* hit */
 	NULL, /* miss */
 	NULL, /* effect */
 	NULL, /* special */
 	NULL, /* keyWords */
 	'One creature',  /* target */
 	NULL,	/* requirement */
 	'Strength vs. AC', /* attack */
 	NULL, /* trigger */
 	'Melee' /* range */
 );

INSERT INTO deities(
	name,
	alignment,
	description
)
VALUES(
	'Kord',
	'Unaligned',
	'Kord is the storm god and the lord of battle. He revels in strength, battlefield prowess, and thunder. Fighters and athletes revere him. He is a mercurial god, unbridled and wild, who summons storms over land and sea; those who hope for better weather appease him with prayers and spirited toasts. He
	gives few commands:
	✦ Be strong, but do not use your strength for wanton destruction.
	✦ Be brave and scorn cowardice in any form.
	✦ Prove your might in battle to win glory and renown.'
);

INSERT INTO alignments(
	name,
	synopsis,
	description
)
VALUES(
	'Good',
	'Freedom and Kindness',
	'If you’re a good character, you believe it is right to aid and protect those in need. 
	You’re not required to sacrifice yourself to help others or to completely ignore your own needs, 
	but you might be asked to place others’ needs above your own . . . in some cases, even if that means 
	putting yourself in harm’s way. In many ways, that’s the essence of being a heroic adven- turer: 
	The people of the town can’t defend themselves from the marauding goblins, so you descend into the 
	dungeon—at significant personal risk—to put an end to the goblin raids. You can follow rules and respect authority, 
	but you’re keenly aware that power tends to corrupt those who wield it, too often leading them to exploit their power 
	for selfish or evil ends. When that hap- pens, you feel no obligation to follow the law blindly. 
	It’s better for authority to rest in the members of a community rather than the hands of any individual or social class. 
	When law becomes exploitation, it crosses into evil territory, and good characters feel compelled to fight it. 
	Good and evil represent fundamentally different viewpoints, cosmically opposed and unable to coexist in peace. 
	Good and lawful good characters, though, get along fine—even if a good character thinks a lawful good companion 
	might be a little too focused on follow- ing the law, rather than simply doing the right thing.'
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
	weaponCategory,
	armorGroup,
	properties,
	categories,
	carryingCapacity,
	armorBonus,
	minimumEnhancementBonus,
	armorCheck,
	speed,
	powerLevel
)
VALUES(
	'Greatsword', /* name */
	'Weapon', /* type */
	NULL, /* level */
	3, /* prof */
	'1d10', /* damage */
	NULL, /* range */
	30, /* purchase price */
	NULL, /* sale price */
	8, /* weight */
	'Heavy Blade', /* weapon group */
	'Military', /* weapon category */
	NULL, /* armor group */
	NULL, /* properties */
	NULL, /* categories */
	NULL, /* carrying capacity */
	NULL, /* armor bonus */
	NULL, /* minimum enhancement bonus */
	NULL, /* armor check */
	NULL, /* speed */
	NULL /* power level */
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
	weaponCategory,
	armorGroup,
	properties,
	categories,
	carryingCapacity,
	armorBonus,
	minimumEnhancementBonus,
	armorCheck,
	speed,
	powerLevel
)
VALUES(
	'Crossbow', /* name */
	'Weapon', /* type */
	NULL, /* level */
	2, /* prof */
	'1d8', /* damage */
	'15/30', /* range */
	25, /* purchase price */
	NULL, /* sale price */
	4, /* weight */
	'Crossbow', /* weapon group */
	'Military', /* weapon category */
	NULL, /* armor group */
	'Load Minor', /* properties */
	NULL, /* categories */
	NULL, /* carrying capacity */
	NULL, /* armor bonus */
	NULL, /* minimum enhancement bonus */
	NULL, /* armor check */
	NULL, /* speed */
	NULL /* power level */
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
	weaponCategory,
	armorGroup,
	properties,
	categories,
	carryingCapacity,
	armorBonus,
	minimumEnhancementBonus,
	armorCheck,
	speed,
	powerLevel
)
VALUES(
	'Scale Armor', /* name */
	'Armor', /* type */
	NULL, /* level */
	NULL, /* prof */
	NULL, /* damage */
	NULL, /* range */
	45, /* purchase price */
	NULL, /* sale price */
	45, /* weight */
	NULL, /* weapon group */
	NULL, /* weapon category */
	'Scale', /* armor group */
	NULL, /* properties */
	NULL, /* categories */
	NULL, /* carrying capacity */
	7, /* armor bonus */
	NULL, /* minimum enhancement bonus */
	NULL, /* armor check */
	-1, /* speed */
	NULL /* power level */
);
