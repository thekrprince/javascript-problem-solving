function countChar(string) {
  if (string.length === 0) {
    return "Enter input";
  }

  const countObj = {};

  for (let i = 0; i < string.length; i++) {
    if (countObj[string[i]]) {
      countObj[string[i]]++;
    } else {
      countObj[string[i]] = 1;
    }
  }

  return countObj;
}

// Count occurence in string
console.log(countChar("Alphabetical"));
// Count occurence in array
console.log(countChar([1, 2, 1, 3, 5, 1, 3, 8, 5]));
