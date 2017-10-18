function round(weight, roundTo = 2.5) {
  if (!weight) {
    console.warn('You need to pass a number to round');
    return false;
  }

  if (roundTo && roundTo < 0) {
    console.warn("You can't round to a negative value, eejit.");
    return false;
  }

  return (Math.round(weight / roundTo) * roundTo);
}

export { round };