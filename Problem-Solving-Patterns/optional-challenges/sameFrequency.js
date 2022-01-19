function sameFrequency(number1, number2) {
  var num1 = number1.toString();
  var num2 = number2.toString();
  if (num1.length !== num2.length) return false;
  var frequencyCounter1 = {};
  var frequencyCounter2 = {};
  for (let val of num1) {
    if (frequencyCounter1[val]) {
      frequencyCounter1[val]++;
    } else {
      frequencyCounter1[val] = 1;
    }
  }

  for (let val of num2) {
    if (frequencyCounter2[val]) {
      frequencyCounter2[val]++;
    } else {
      frequencyCounter2[val] = 1;
    }
  }

  for (let val in frequencyCounter1) {
    if (!(frequencyCounter1[val] === frequencyCounter2[val])) {
      return false;
    }
  }
  return true;
}

var res = sameFrequency(18288, 2881);
console.log(res);
