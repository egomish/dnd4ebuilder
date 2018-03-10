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
	'Halfling', /* name */
	'Quick and resourceful wanderers, small in stature but great in courage', /* synopsis */
	"Halflings are a small race known for their resourcefulness, quick wits,
	and steady nerves. They are a nomadic folk who roam waterways and marshlands. 
	No people travel farther or see more of what happens in the world than halflings", /* description */
	"3'10''", /* min height */
	"4'2''", /* max height */
	75, /* min weight */
	85, /* max weight */
	'+2 Dexterity', /* ability score bonus 1 */
	'+2 Charisma', /* ability score bonus 2 */
	'small', /* size */
	6, /* speed */
	'Normal', /* vision */
	2, /* number of languages */
	'+2 Acrobatics', /* skill bonus 1 */
	'+2 Thievery', /* skill bonus 2 */
	'Bold, Nimble Reaction, Second Chance' /* race features */
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
	'Rogue', /* name */
	'You look surprised to see me. If you’d been paying attention, you might still be alive.', /* synopsis */
	"Rogues are cunning and elusive adversaries. Rogues slip into and out of shadows on a whim, 
	pass anywhere across the field of battle without fear of reprisal, and appear suddenly only 
	to drive home a lethal blade. As a rogue, you might face others’ preconceptions regarding 
	your motivations, but your nature is your own to mold. You could be an agent fresh from 
	the deposed king’s shattered intelligence network, an accused criminal on the lam seeking 
	to clear your name, a wiry performer whose goals transcend the theatrical stage, a kid 
	trying to turn around your hardluck story, or a daredevil thrill-seeker who can’t get 
	enough of the adrenaline rush of conflict. Or perhaps you are merely in it for the gold, 
	after all. With a blade up your sleeve and a concealing cloak across your shoulders, you 
	stride forth, eyes alight with anticipation. What worldly wonders and rewards are yours 
	for the taking?", /* description */
	'Striker. You dart in to attack, do massive damage, and then retreat to safety. You do best 
	when teamed with a defender to flank enemies.', /* role */
	' Martial. Your talents depend on extensive training and constant practice, innate skill, 
	and natural coordination.', /* power source */
	'Dexterity, Strength, Charisma', /* key ability scores */
	'Cloth, leather', /* armor proficiencies */
	'Dagger, hand crossbow, shuriken, sling, short sword ', /* weapon proficiencies */
	NULL, /* implements */
	0, /* ac */
	0, /* fort */
	2, /* reflex */
	0, /* will */
	12, /* lvl 1 HP */
	5, /* per level HP */
	6, /* surges */
	6, /* number of skills */
	'Brawny rogue, trickster rogue', /* builds */
	'First Strike, Rogue Tactics, Rogue Weapon Talent, Sneak Attack' /* class features */
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
	'First Strike',
	'class',
	'Rogue',
	NULL,
	"At the start of an encounter, you have combat advantage against any creatures 
	that have not yet acted in that encounter.",
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
	'Rogue Tactics',
	'class',
	'Rogue',
	NULL,
	"Rogues operate in a variety of ways. Some rogues use their natural charm and cunning 
	trickery to deceive foes. Others rely on brute strength to overcome their enemies. 
	Choose one of the following options. Artful Dodger: You gain a bonus to AC equal to 
	your Charisma modifier against opportunity attacks. Brutal Scoundrel: You gain a bonus 
	to Sneak Attack damage equal to your Strength modifier. The choice you make also provides 
	bonuses to certain rogue powers. Individual powers detail the effects (if any) your Rogue 
	Tactics selection has on them.",
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
	'Rogue Weapon Talent ',
	'class',
	'Rogue',
	NULL,
	"When you wield a shuriken, your weapon damage die increases by one size. When you 
	wield a dagger, you gain a +1 bonus to attack rolls.",
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
	'Sneak Attack',
	'class',
	'Rogue',
	NULL,
	"Once per round, when you have combat advantage against an enemy and are using a 
	weapon from the light blade, the crossbow, or the sling weapon group, an attack you 
	make against that enemy deals extra damage if the attack hits. You decide whether to 
	apply the extra damage after making the damage roll. As you advance in level, your 
	extra damage increases. lv.1-lv.10: +2d6; lv.11-lv.20: +3d6; lv.21-lv.30: +5d6",
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
	'Bold',
	'race',
	'Halfling',
	NULL,
	"You gain a +5 racial bonus to saving throws against fear.",
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
	'Nimble Reaction',
	'race',
	'Halfling',
	NULL,
	"You gain a +2 racial bonus to AC against opportunity attacks.",
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
	'Second Chance',
	'race',
	'Halfling',
	NULL,
	"You can use second chance as an encounter power.",
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
	'Artful Dodger',
	'feat',
	NULL,
	NULL,
	"The rogue gains a bonus to AC against opportunity attacks equal to the rogue's Charisma modifier.",
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
 	'Second Chance',
 	'encounter',
 	'Immediate Interrupt',
 	'racial',
 	'class',
 	'PHB1',
 	'Luck and small size combine to work in your favor as you dodge your enemy’s attack.',
 	0,
 	NULL, /* hit */
 	NULL, /* miss */
 	'When an attack hits you, force an enemy to roll the attack again. The enemy uses the 
 	second roll, even if it’s lower.', /* effect */
 	NULL, /* special */
 	NULL, /* keyWords */
 	NULL,  /* target */
 	NULL,	/* requirement */
 	NULL, /* attack */
 	NULL, /* trigger */
 	'personal' /* powerRange */
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
 	'Deft Strike',
 	'at-will',
 	'standard',
 	'attack',
 	'class',
 	'PHB1',
 	'A final lunge brings you into an advantageous position.',
 	1,
 	'1[W] + Dexterity modifier damage. Increase damage to 2[W] + Dexterity modifier at 21st level.', /* hit */
 	NULL, /* miss */
 	NULL, /* effect */
 	'You can move 2 squares before the attack.', /* special */
 	'Martial, Weapon', /* keyWords */
 	'One creature',  /* target */
 	'You must be wielding a crossbow, a light blade, or a sling. ',	/* requirement */
 	'Dexterity vs. AC', /* attack */
 	NULL, /* trigger */
 	'Melee or Ranged weapon' /* powerRange */
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
 	'Riposte Strike',
 	'at-will',
 	'standard',
 	'attack',
 	'class',
 	'PHB1',
 	'With a calculated strike, you leave your foe vulnerable to an adroit 
 	riposte should he dare attack you.',
 	1,
 	' 1[W] + Dexterity modifier damage. If the target attacks you before 
 	the start of your next turn, you make your riposte against the target 
 	as an immediate interrupt: a Strength vs. AC attack that deals 1[W] + 
 	Strength modifier damage. Increase damage to 2[W] + Dexterity modifier 
 	and riposte to 2[W] + Strength modifier at 21st level.', /* hit */
 	NULL, /* miss */
 	NULL, /* effect */
 	NULL, /* special */
 	'Martial,Weapon', /* keyWords */
 	'One creature',  /* target */
 	'You must be wielding a light blade.',	/* requirement */
 	'Dexterity vs. AC', /* attack */
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
 	'Positioning Strike',
 	'encounter',
 	'standard',
 	'attack',
 	'class',
 	'PHB1',
 	'A false stumble and a shove place the enemy exactly where you want him.',
 	1,
 	'1[W] + Dexterity modifier damage, and you slide the target 1 square. 
 	Artful Dodger: You slide the target a number of squares equal to your Charisma 
 	modifier', /* hit */
 	NULL, /* miss */
 	NULL, /* effect */
 	NULL, /* special */
 	'Martial, Weapon', /* keyWords */
 	'One creature',  /* target */
 	'You must be wielding a light blade.',	/* requirement */
 	' Dexterity vs. Will ', /* attack */
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
 	'Trick Strike',
 	'daily',
 	'standard',
 	'attack',
 	'class',
 	'PHB1',
 	'Through a series of feints and lures, you maneuver your foe right where you want him.',
 	1,
 	'3[W] + Dexterity modifier damage, and you slide the target 1 square.', /* hit */
 	NULL, /* miss */
 	'Until the end of the encounter, each time you hit the target you slide it 1 square.', /* effect */
 	NULL, /* special */
 	'Martial, Weapon', /* keyWords */
 	'One creature',  /* target */
 	'You must be wielding a crossbow, a light blade, or a sling. ',	/* requirement */
 	'Dexterity vs. AC', /* attack */
 	NULL, /* trigger */
 	'Melee or Ranged weapon' /* powerRange */
 );

INSERT INTO deities(
	name,
	alignment,
	description
)
VALUES(
	'Laeris',
	'Chaotic Neutral',
	'Laeris is the unaligned god of trickery and deceit. He created the Doppelgangers 
	to spread his trickery throughout the world. Laeris teaches the following:
	✦ Truth does not exist. Everybody lies. Don’t trust anyone.
	✦ Law is a crutch. Only those who can do as they want are truly free.
	✦ Property is an illusion. Take what you need today, but do not hold on to it tomorrow.
	✦ Hide your activities from others. Lie about your motives. Never reveal your goals. 
	Only those who can see through your deceits are worthy to discover your true goals.'
);

INSERT INTO alignments(
	name,
	synopsis,
	description
)
VALUES(
	'Chaotic Good',
	'Independent and Humane',
	'A chaotic good character acts as his conscience directs him with little regard 
	for what others expect of him. He makes his own way, but he is kind and benevolent. 
	He believes in goodness and right but has little use for laws and regulations. He 
	hates it when people try to intimidate others and tell them what to do. He follows
	 his own moral compass, which, although good, may not agree with that of society.'
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
	'Leather Armor', /* name */
	'Armor', /* type */
	NULL, /* level */
	NULL, /* prof */
	NULL, /* damage */
	NULL, /* range */
	25, /* purchase price */
	NULL, /* sale price */
	15, /* weight */
	NULL, /* weapon group */
	NULL, /* properties */
	NULL, /* categories */
	NULL, /* carrying capacity */
	2, /* armor bonus */
	NULL, /* minimum enhancement bonus */
	NULL, /* armor check */
	NULL, /* speed */
	NULL, /* power level */
	'Leather Armor (Light)', /* armorGroup */
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
	'Hand crossbow', /* name */
	'Weapon', /* type */
	NULL, /* level */
	2, /* prof */
	'1d6', /* damage */
	'10/20', /* range */
	25, /* purchase price */
	NULL, /* sale price */
	2, /* weight */
	'Crossbow', /* weapon group */
	'Load Free', /* properties */
	NULL, /* categories */
	NULL, /* carrying capacity */
	NULL, /* armor bonus */
	NULL, /* minimum enhancement bonus */
	NULL, /* armor check */
	NULL, /* speed */
	NULL, /* power level */
	NULL, /* armorGroup */
	'Simple Ranged Weapons'  /* weaponCategory */
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
	'Dagger', /* name */
	'Weapon', /* type */
	NULL, /* level */
	3, /* prof */
	'1d4', /* damage */
	'5/10', /* range */
	1, /* purchase price */
	NULL, /* sale price */
	1, /* weight */
	'Light blade', /* weapon group */
	'Off-hand, light thrown', /* properties */
	NULL, /* categories */
	NULL, /* carrying capacity */
	NULL, /* armor bonus */
	NULL, /* minimum enhancement bonus */
	NULL, /* armor check */
	NULL, /* speed */
	NULL, /* power level */
	NULL, /* armorGroup */
	'Simple Melee Weapons' /* weaponCategory */
);
