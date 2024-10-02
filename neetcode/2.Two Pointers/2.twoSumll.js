/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.
*/

function twoSum(numbers, target) {
  let index1 = 0;
  let index2 = numbers.length - 1;

  while (index1 < index2) {
    const sum = numbers[index1] + numbers[index2];
    if (sum === target) {
      return [index1, index2];
    } else if (sum > target) {
      index2--;
    } else {
      index1++;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
