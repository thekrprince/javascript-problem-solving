/** 
 * Write a function called same which accepts 2 arrays. The function should return true if every value in the array has it's corresponding value squared in the second array.
 * The frequency of values must be the same.
 **/

function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return "Length is not equal";
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if(!(key**2 in frequencyCounter2)) {
      return false;
    }
    
    if(frequencyCounter2[key**2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

const res = same([4, 2, 3, 4], [4, 16, 9, 16]);
console.log(res);