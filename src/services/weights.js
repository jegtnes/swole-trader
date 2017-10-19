function generateRepIntensity(weekNumber, setNumber) {
  var percentage = 40;

  if (!weekNumber || !setNumber) {
    console.warn('You must specify both a week number and a set number');
    return false;
  }

  if (setNumber > 6 || (setNumber > 3 && weekNumber === 4)) {
    console.warn("You can't have more than 6 set in a week, or 3 on the last week");
    return false;
  }

  if (setNumber < 1) {
    console.warn("You must have at least one set in a week");
    return false;
  }

  if (weekNumber > 4 || weekNumber < 1) {
    console.warn("The week number must be between 1 and 4");
    return false;
  }

  if (weekNumber === 4) {
    if (setNumber >= 2) percentage += 10;
    if (setNumber >= 3) percentage += 10;
  } else if (weekNumber > 0 && weekNumber < 4) {

    percentage += (weekNumber * 5) -5;

    if (setNumber >= 2) percentage += 10;
    if (setNumber >= 3) percentage += 10;
    if (setNumber >= 4) percentage += 5;
    if (setNumber >= 5) percentage += 10;
    if (setNumber === 6) percentage += 10;
  }

  return percentage / 100;
}

function generateSets(weekNumber) {
  let sets = ["5x", "5x"];

  if (weekNumber === 4) {
    sets.push("5x");
  } else {
    sets.push("3x");

    if (weekNumber === 1) {
      sets.push("5x", "5x", "5+");
    } else if (weekNumber === 2) {
      sets.push("3x", "3x", "3+");
    } else if (weekNumber === 3) {
      sets.push("5x", "3x", "1+");
    }
  }

  return sets;
}

export { generateRepIntensity, generateSets }
