/*
  Implement a function called, areThereDuplicates which accepts a variable number of arguments, and
  checks whether there are any duplicates among the arguments passed in.
*/

// Solution using Frequency Counter Pattern

function areThereDuplicates(...args) {
  let frequencyCounter = {};

  for (let val of args) {
    if (frequencyCounter[val]) {
      frequencyCounter[val]++;
    } else {
      frequencyCounter[val] = 1;
    }
  }

  console.log(frequencyCounter);

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) return true;
  }
  return false;
}

var res = areThereDuplicates("a", "b", 1, 5, 1);
console.log(res);

var res2 = areThereDuplicates(11, 89, 24, 35);
console.log(res2);
