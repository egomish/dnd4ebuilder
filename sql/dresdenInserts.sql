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
	'Dagger, quarterstaff',
	'Orbs, staffs, wands',
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
	prerequisites,
	benefit,
	special
)
VALUES(
	'Arcane Implement Mastery',
	'class',
	NULL,
	"You specialize in the use of one kind of implement to gain additional abilities when you wield it. 
	Choose one of the following forms of implement mastery: Orb of Imposition, Staff of Defense, or Wand of Accuracy",
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
	'Staff of Defense',
	'class',
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
	prerequisites,
	benefit,
	special
)
VALUES(
	'Cantrips',
	'class',
	NULL,
	"Cantrips are minor spells you gain at 1st level. You can use the ghost sound, light, mage hand, and prestidigitation 
	cantrips as at-will powers.",
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
	'Ritual Casting',
	'class',
	NULL,
	"You gain the Ritual Caster feat as a bonus feat, allowing you to use magical rituals",
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
	'Spellbook',
	'class',
	NULL,
	"Three 1st level rituals, plus more at higher levels. Also, twice the daily and utility spells you can use; 
	choose from among these at each extended rest.",
	NULL
);