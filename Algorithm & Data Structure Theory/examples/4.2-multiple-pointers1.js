/*
Write a function called sum2zero which accepts a sorted array of integers. The function should find the first pair of where the sum is 0.
Return an array that included both values that sum to zero or undefined if a pair does not exist.
*/

function sum2zero(sortedArray, target) {
  if (sortedArray.length <= 1) return false;
  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    const sum = sortedArray[left] + sortedArray[right];
    if (sum === target) {
      return [sortedArray[left], sortedArray[right]];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return "Not found";
}

const result = sum2zero([-3, -2, -1, 0, 1, 2, 3], 0);
console.log(result);
const result1 = sum2zero([-2, 0, 1, 3], 1);
console.log(result1);
const result2 = sum2zero([1, 2, 3], 0);
console.log(result2);
const result3 = sum2zero([1], 0);
console.log(result3);
const result4 = sum2zero([-3, -2, -1, 0, 2, 4, 6], 0);
console.log(result4);
