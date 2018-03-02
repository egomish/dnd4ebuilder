function getPowerIfExists(powerName) {
  power = {}
  if (powerName != "") {
    power.name = "Test";
    power.usage = "Encounter";
    power.actionType = "Standard Action";
    power.source = "PHB1";
    power.target = "One Creature";
    power.flavor = "Salty and sweet at the same time!";
    power.elements = [
      ["Keywords", "Martial"],
      ["Effect", "Stuff happens"]
    ];
  }
  return power;
}

function getLevelUpPowers(ddch) {
  var powers = [];
  powers.push(getPowerIfExists(ddch.level1.atwillPower1));
  powers.push(getPowerIfExists(ddch.level1.atwillPower2));
  powers.push(getPowerIfExists(ddch.level1.encounterPower));
  powers.push(getPowerIfExists(ddch.level1.dailyPower));
  powers.push(getPowerIfExists(ddch.level2.utilityPower));
  powers.push(getPowerIfExists(ddch.level3.encounterPower));
  powers.push(getPowerIfExists(ddch.level5.dailyPower));
  powers.push(getPowerIfExists(ddch.level6.utilityPower));
  powers.push(getPowerIfExists(ddch.level7.encounterPower));
  powers.push(getPowerIfExists(ddch.level9.dailyPower));
  powers.push(getPowerIfExists(ddch.level10.utilityPower));
  return powers;
}

function getRacePowers(raceFeatures) {
  var powers = [];
  /*
  for (feature in raceFeatures) {
    if (feature.desc.includes("power")) {
      powers.push(getPowerIfExists(feature.name));
    }
  }
  */
  return powers;
}

function getFeatPowers(ddch) {
  var powers = [];
  if (ddch.level1.ddfeat.desc.includes("Power")) {
    powers.push(getPowerIfExists(ddch.level1.ddfeat.name));
  }
  if (ddch.level2.ddfeat.desc.includes("Power")) {
    powers.push(getPowerIfExists(ddch.level2.ddfeat.name));
  }
  if (ddch.level4.ddfeat.desc.includes("Power")) {
    powers.push(getPowerIfExists(ddch.level4.ddfeat.name));
  }
  if (ddch.level6.ddfeat.desc.includes("Power")) {
    powers.push(getPowerIfExists(ddch.level6.ddfeat.name));
  }
  if (ddch.level8.ddfeat.desc.includes("Power")) {
    powers.push(getPowerIfExists(ddch.level8.ddfeat.name));
  }
  if (ddch.level10.ddfeat.desc.includes("Power")) {
    powers.push(getPowerIfExists(ddch.level10.ddfeat.name));
  }
  return powers;
}

function getClassPowers(classFeatures) {
  var powers = [];
  /*
  for (feature in classFeatures) {
    if (feature.desc.includes("power")) {
      powers.push(getPowerIfExists(feature.name));
    }
  }
  */
  return powers;
}

module.exports.calculate = function(ddch, cv) {
  var allPowers = getLevelUpPowers(ddch);
  allPowers.concat(getRacePowers(cv.raceFeatures));
  allPowers.concat(getFeatPowers(ddch));
  allPowers.concat(getClassPowers(ddch.level1.classFeatures));
  return allPowers;
}