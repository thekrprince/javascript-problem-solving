/* Write a function called same, which accepts 2 arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same. */

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let val of arr1) {
    if (obj1[val]) {
      obj1[val] += 1;
    } else {
      obj1[val] = 1;
    }
  }

  for (let val of arr2) {
    if (obj2[val]) {
      obj2[val] += 1;
    } else {
      obj2[val] = 1;
    }
  }

  for (let key in obj1) {
    if (!(key ** 2 in obj2)) {
      return false;
    }
    if (obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }

  return "Same";
}

const res = same([1, 4, 3, 3, 8, 10], [9, 16, 9, 1, 64, 100]);
console.log(res);
