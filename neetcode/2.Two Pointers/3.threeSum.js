/**
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
 */

// Just returning the true and false based on three pointers

function threeSum(nums) {
  nums.sort((a, b) => a - b);

  console.log(nums);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        return true;
      } else if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      }
    }
  }
  return false;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([11, 7, 5, 9, 8, -6, 16, 17, -3]));
console.log(threeSum([5, 7, 9, 9, 8, -10, 16, 8, -3]));
