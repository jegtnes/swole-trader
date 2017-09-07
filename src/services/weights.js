function percentageLift(weekNumber, setNumber) {
  var percentage = 40;

  if (!weekNumber || !setNumber) {
    console.warn('You must specify both a week number and a set number');
    return false;
  }

  if (setNumber > 6 || (setNumber > 3 && weekNumber === 4)) {
    console.warn("You can't have more than 6 set in a week, or 3 on the last week");
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

export { percentageLift }