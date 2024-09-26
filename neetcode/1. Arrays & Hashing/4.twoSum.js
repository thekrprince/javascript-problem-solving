/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 11, 4, 6, 27], 30));

// Optimized solution

function twoSum1(nums, target) {
  let firstIdx = 0;
  let secondIdx = 1;

  while (secondIdx <= nums.length - 1) {
    if (nums[firstIdx] + nums[secondIdx] === target) {
      return [firstIdx, secondIdx];
    } else if (secondIdx !== nums.length - 1) {
      secondIdx++;
    } else {
      firstIdx++;
      secondIdx = firstIdx + 1;
    }
  }

  return;
}

console.log(twoSum1([2, 7, 11, 15], 9));
console.log(twoSum1([3, 2, 4], 6));
console.log(twoSum1([3, 11, 4, 6, 27], 30));
console.log(twoSum1([2, 5, 5, 11], 10));
