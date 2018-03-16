INSERT INTO races(
	name,
	synopsis,
	description,
	minHeight,
	maxHeight,
	minWeight,
	maxWeight,
	strBonus,
	conBonus,
	dexBonus,
	intBonus,
	wisBonus,
	chaBonus,
	size,
	speed,
	vision,
	numberOfLanguages,
	acrobaticsBonus,
	arcanaBonus,
	athleticsBonus,
	bluffBonus,
	diplomacyBonus,
	dungeoneeringBonus,
	enduranceBonus,
	healBonus,
	historyBonus,
	insightBonus,
	intimidateBonus,
	natureBonus,
	perceptionBonus,
	religionBonus,
	stealthBonus,
	streetwiseBonus,
	thieveryBonus,
	racialFeatures
)
VALUES(
	'Shadar-kai', /* name */
	'Cold of heart and dark of eye, passion burns still within these people of shadow and deep winter.', /* synopsis */
	'Long eons in the Shadowfell have shaped the shadar-kai into a fiery and, some say, cruel people. Fighting the apathy pervasive in their home plane, shadar-kai live passionately and fearlessly, if grimly. They see themselves as instruments of death and dissolution, the bringers of the righteous end to complacency, stagnation, and life itself. Theirs is a harsh society of self interest. Among shadar-kai, the strong of body and mind excel and create legends. The weak molder to dust, passing into eternity unremembered.', /* description */
	"5'7''", /* min height */
	"6'0''", /* max height */
	110, /* min weight */
	170, /* max weight */
	0, /* strength bonus */
	0, /* constitution bonus */
	2, /* dexterity bonus */
	2, /* intelligence bonus */
	0, /* wisdom bonus */
	0, /* charisma bonus */
	'medium', /* size */
	6, /* speed */
	'low light', /* vision */
	2, /* number of languages */
	2, /* acrobatics bonus */
	0, /* arcana bonus */
	0, /* athletics bonus */
	0, /* bluff bonus */
	0, /* diplomacy bonus */
	0, /* dungeoneering bonus */
	0, /* endurance bonus */
	0, /* heal bonus */
	0, /* history bonus */
	0, /* insight bonus */
	0, /* intimidate bonus */
	0, /* nature bonus */
	0, /* perception bonus */
	0, /* religtion bonus */
	2, /* stealth bonus */
	0, /* streetwise bonus */
	0, /* thievery bonus */
	'Shadow Jaunt, Shadow Origin, Winterkin' /* race features */
); 

/* wizard class */
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
	'Wizard', /* name */
	'I am the fire that burns, the choking fog, the storm that rains devastation on our foes.', /* synopsis */
	"Wizards are scions of arcane magic. Wizards tap the true power that permeates the cosmos,
	research eso- teric rituals that can alter time and space, and hurl balls of fire that 
	incinerate massed foes. Wizards wield spells the way warriors brandish swords.
	Magic lured you into its grasp, and now you seek to master it in turn. You could be a 
	bespectacled sage searching for dusty tomes in forgotten sepulchers, a scarred war mage plying 
	foes with fireballs and foul language in equal measure, a disgruntled apprentice who absconded 
	with your master’s spellbooks, an eladrin upholding the magical tradition of your race, or even 
	a power-hungry student of magic who might do anything to learn a new spell.
	A cloak of spells enfolds you, ancient rituals bol- ster your senses, and runed implements of 
	your craft hang from your belt. Effervescing arcane lore pulses through your consciousness, a 
	constant pressure craving release. When will you know enough magic to storm the ramparts of reality itself?",
	'Controller. You exert control through magical
	effects that cover large areas—sometimes hindering
	foes, sometimes consuming them with fire.',
	'Arcane. You channel arcane forces through extensive study, hidden knowledge, and intricate preparation. 
	To you, magic is an art form, an expressive and powerful method by which you seek to control the world around you.',
	'Intelligence, Wisdom, Dexterity',
	'Cloth',
	'Dagger, Quarterstaff',
	'Orbs, Staffs, Wands',
	0,
	0,
	0,
	2,
	10,
	4,
	6,
	4,
	'Control wizard, war wizard',
	'Arcane Implement Mastery, cantrips,
	Ritual Casting, spellbook'
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
	'Arcane Implement Mastery',
	'class',
	'Wizard',
	NULL,
	"You specialize in the use of one kind of implement to gain additional abilities when you wield it. 
	Choose one of the following forms of implement mastery: Orb of Imposition, Staff of Defense, or Wand of Accuracy",
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
	'Staff of Defense',
	'class',
	'Wizard',
	NULL,
	"A staff of defense grants you a +1 bonus to AC. In addition, once per encoun-ter as an immediate interrupt, 
	you gain a bonus to defense against one attack equal to your Constitu- tion modifier. You can declare the bonus 
	after the Dungeon Master has already told you the damage total. You must wield your staff to benefit from these features. 
	This form of mastery is useful for all wiz- ards, particularly if you dabble in both control and damage-dealing spells.",
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
	'Cantrips',
	'class',
	'Wizard',
	NULL,
	"Cantrips are minor spells you gain at 1st level. You can use the ghost sound, light, mage hand, and prestidigitation 
	cantrips as at-will powers.",
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
	'Ritual Casting',
	'class',
	'Wizard',
	NULL,
	"You gain the Ritual Caster feat as a bonus feat, allowing you to use magical rituals",
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
	'Spellbook',
	'class',
	'Wizard',
	NULL,
	"Three 1st level rituals, plus more at higher levels. Also, twice the daily and utility spells you can use; 
	choose from among these at each extended rest.",
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
	"Reaper's Touch",
	'class',
	'Wizard',
	NULL,
	"You gain a benefit with some attack powers.",
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
	"Armor Proficiency(Leather)",
	'Armor Proficiency',
	NULL,
	NULL,
	"You gain training with leather armor.",
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
	"Implement Expertise (staff)",
	'Implement Expertise',
	NULL,
	NULL,
	"+1 to attack rolls with staffs.",
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
	"White Lotus Riposte",
	'Heroic',
	'Wizard',
	NULL,
	"When an enemy you hit with an arcane at-will power attacks you before the start of your next turn, that enemey takes damage equal to abil modifier to the power's damage.",
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
	"Devious Jaunt",
	'race',
	'Shadar-kai',
	'int 13',
	"Can add Int modifier to the distace you can teleport with shadow jaunt.",
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
 	'Magic Missile',
 	'at-will',
 	'standard',
 	'attack',
 	'class',
 	'PHB1',
 	'You launch a silvery bolt of force at an enemy.',
 	1,
 	'2d4 + Intelligence modifier force damage.
	Increase damage to 4d4 + Intelligence modifier at 21st level.',
 	NULL,
 	NULL,
 	'This power counts as a ranged basic attack. When
	a power allows you to make a ranged basic attack, you can use this power.',
 	'One creature',
 	NULL,
 	NULL,
 	'Intelligence vs. Reflex',
 	NULL,
 	'Ranged 20'
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
 	'Thunderwave',
 	'at-will',
 	'standard',
 	'attack',
 	'class',
 	'PHB1',
 	'You create a whip-crack of sonic power that lashes up from the
	ground.',
 	1,
 	'1d6 + Intelligence modifier thunder damage, and you push the target a number of squares equal to your Wis- dom modifier.
	Increase damage to 2d6 + Intelligence modifier at 21st level.', /* hit */
 	NULL, /* miss */
 	NULL, /* effect */
 	NULL, /* special */
 	'Arcane Implement, Thunder', /* keyWords */
 	'Each creature in blast',  /* target */
 	NULL,	/* requirement */
 	'Intelligence vs. Fortitude', /* attack */
 	NULL, /* trigger */
 	'Close blast 3'
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
 	'Force Orb',
 	'encounter',
 	'standard',
 	'attack',
 	'class',
 	'PHB1',
 	'You hurl an orb of magical force at an enemy. 
 	It bursts against the target and throws off razor-sharp shards of force that cut nearby enemies to ribbons.',
 	1,
 	'Hit: 1d6 + Intelligence modifier thunder damage, and you push the target a number of squares equal to your Wis- dom modifier.
	Increase damage to 2d6 + Intelligence modifier at 21st level. Secondary Hit: 1d10 + Intelligence modifier force damage.', /* hit */
 	NULL, /* miss */
 	NULL, /* effect */
 	NULL, /* special */
 	NULL, /* keyWords */
 	'Primary Target: One creature or object. Secondary Target: Each enemy adjacent to the primary target',  /* target */
 	NULL,	/* requirement */
 	'Attack: Intelligence vs Secondary Attack: Reflex. Intelligence vs. Reflex', /* attack */
 	NULL, /* trigger */
 	'Ranged 20'
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
 	'Ghost Sound',
 	'at-will',
 	'standard',
 	NULL,
 	'class',
 	'PHB1',
 	'With a wink, you create an illusory sound that emanates from somewhere close by.',
 	1,
 	NULL,
 	NULL,
 	'You cause a sound as quiet as a whisper or as loud as a yelling or fighting creature to emanate from the target. 
 	You can produce nonvocal sounds such as the ringing of a sword blow, jingling armor, or scraping stone. If you whisper, you can whisper quietly enough that only creatures adjacent to the target can hear your words.',
 	NULL,
 	'Arcane Illusion',
 	'One object or unoccupied square',
 	NULL,
 	NULL,
 	NULL,
 	'Ranged 10'
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
 	'Light',
 	'at-will',
 	'minor',
 	NULL,
 	'class',
 	'PHB1',
 	'With a wave of your hand, you cause a bright light to appear on the tip of your staff, upon some other object, or in a nearby space.',
 	1,
 	NULL,
 	NULL,
 	"You cause the target to shed bright light. The light fills the target's square and all squares within 4 squares of it. The light lasts for 5 minutes. Putting out the light is a free action.",
 	'You can have only one light cantrip active at a time. If you create a new light, your previously cast light winks out.',
 	'Arcane Illusion',
 	'One object or unoccupied square',
 	NULL,
 	NULL,
 	NULL,
 	'Ranged 5'
 );

INSERT INTO deities(
	name,
	alignment,
	description
)
VALUES(
	'The Raven Queen',
	'Unaligned',
	'The name of the god of death is long forgotten, but she is called the Raven Queen. 
	She is the spinner of fate and the patron of winter. She marks the end of each mortal life, 
	and mourn- ers call upon her during funeral rites, in the hope that she will guard the departed 
	from the curse of undeath. She expects her followers to abide by these commandments:
	✦ Hold no pity for those who suffer and die, for death is the natural end of life.
	✦ Bring down the proud who try to
	cast off the chains of fate. As the instru- ment of the Raven Queen, you must punish hubris where you find it.
	✦ Watch for the cults of Orcus and stamp them out whenever they arise. The Demon Prince of the Undead 
	seeks to claim the Raven Queen’s throne.'
);

INSERT INTO alignments(
	name,
	synopsis,
	description
)
VALUES(
	'Evil',
	'Tyranny and hatred',
	'Evil characters don’t necessarily go out of their way to hurt people, but they’re perfectly willing to take advantage 
	of the weakness of others to acquire what they want. Evil characters use rules and order to maximize personal gain. 
	They don’t care whether laws hurt other people. They support institutional structures that give them power, even if 
	that power comes at the expense of others’ freedom. Slavery and rigid caste structures are not only acceptable but 
	desirable to evil characters, as long as they are in a position to benefit from them.'
);



