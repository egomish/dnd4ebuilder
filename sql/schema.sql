CREATE TABLE classes(
	name VARCHAR(50) PRIMARY KEY,
	synopsis TEXT,
	description TEXT,
	role VARCHAR(255),
	powerSource VARCHAR(255),
	keyAbilityScores VARCHAR(70),
	armorProficiencies TEXT,
	weaponProficiencies TEXT,
	implements VARCHAR(50),
	acBonus INTEGER,
	fortBonus INTEGER,
	reflexBonus INTEGER,
	willBonus INTEGER,
	level1HP INTEGER,
	perLevelHP INTEGER,
	surges INTEGER,
	numberOfSkills INTEGER,
	builds VARCHAR(100),
	classFeatures TEXT
);

CREATE TABLE features(
	name VARCHAR(100) PRIMARY KEY,
	kind ENUM('race', 'class', 'feat'),
	prerequisites TEXT,
	benefit VARCHAR(255),
	special VARCHAR(255)
);

CREATE TABLE powers(
	name VARCHAR(50) PRIMARY KEY,
	powerUsage ENUM('item', 'at-will', 'encounter', 'daily'),
	actionType ENUM('standard', 'minor', 'move', 'Immediate Interrupt', 'Immediate Reaction'),
	powerType ENUM('attack', 'utility'),
	kind ENUM('race', 'class', 'feat', 'item'),
	source ENUM('PHB1', 'Heroes of the Shadowfell', 'PHB2', 'PHB3', 'MP', 'DP', 'AP', 'PP'),
	flavor TEXT,
	level INTEGER,
	hit TEXT,
	miss TEXT,
	effect TEXT,
	special TEXT,
	keyWords TEXT,
	target TEXT,
	requirement TEXT,
	attack TEXT,
	powerTrigger TEXT,
	powerRange TEXT
);

CREATE TABLE languages(
	name VARCHAR (50) PRIMARY KEY,
	dragonborn BOOLEAN,
	dwarf BOOLEAN,
	eladrin BOOLEAN,
	elf BOOLEAN,
	halfElf BOOLEAN,
	halflings BOOLEAN,
	human BOOLEAN,
	tiefling BOOLEAN,
	script VARCHAR(50),
	description TEXT
);

CREATE TABLE rituals(
	name VARCHAR(50) PRIMARY KEY,
	synopsis TEXT,
	description TEXT,
	level INTEGER,
	category VARCHAR(255),
	castingTime VARCHAR(50),
	componentCost INTEGER,
	marketPrice INTEGER,
	keySkill VARCHAR(30),
	effects TEXT
);

CREATE TABLE deities(
	name VARCHAR(50) PRIMARY KEY,
	alignment VARCHAR(50),
	description TEXT
);

CREATE TABLE alignments(
	name VARCHAR(50) PRIMARY KEY,
	synopsis TEXT,
	description TEXT
);

CREATE TABLE races(
	name VARCHAR(50) PRIMARY KEY,
	synopsis TEXT,
	description TEXT,
	minHeight VARCHAR(10),
	maxHeight VARCHAR(10),
	minWeight INTEGER,
	maxWeight INTEGER,
	abilityScoreBonus1 TEXT,
	abilityScoreBonus2 TEXT,
	size ENUM('tiny', 'small', 'medium', 'large', 'huge'),
	vision ENUM('normal', 'low light', 'dark vision'),
	numberOfLanguages INTEGER,
	skillBonus1 TEXT,
	skillBonus2 TEXT,
	racialFeatures TEXT
);

CREATE TABLE items(
	name VARCHAR(30) PRIMARY KEY,
	type VARCHAR(20),
	level INTEGER,
	prof INTEGER,
	damage VARCHAR(20),
	weaponRange VARCHAR(10),
	purchasePrice FLOAT,
	salePrice FLOAT,
	weight INTEGER,
	weaponGroup VARCHAR(20),
	weaponCategory ENUM('Improvised', 'Simple', 'Military', 'Superior'),
	armorGroup VARCHAR(20),
	properties varchar(30),
	categories TEXT,
	carryingCapacity INTEGER,
	armorBonus INTEGER,
	minimumEnhancementBonus INTEGER,
	armorCheck INTEGER,
	speed INTEGER,
	powerLevel INTEGER
);