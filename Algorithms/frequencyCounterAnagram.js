function anagramCounter(str1, str2) {
  if (str1.trim() === '' && str2.trim() === '') return true;

  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of str1) {
    if (frequencyCounter1[val]) {
      frequencyCounter1[val]++;
    } else {
      frequencyCounter1[val] = 1;
    }
  }

  for (let val of str2) {
    if (frequencyCounter2[val]) {
      frequencyCounter2[val]++;
    } else {
      frequencyCounter2[val] = 1;
    }
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

var res = anagramCounter('rat', 'car');
console.log(res);
