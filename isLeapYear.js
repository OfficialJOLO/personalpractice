function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log(isLearYear(2024)); // true
