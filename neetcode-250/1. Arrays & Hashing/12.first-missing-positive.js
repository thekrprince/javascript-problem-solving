// First Missing Positive - https://leetcode.com/problems/first-missing-positive/

function firstMissingPositive(nums) {
  nums.sort((a, b) => a - b);

  let positiveNum = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) {
      continue;
    } else if (nums[i] === positiveNum) {
      positiveNum++;
    } else {
      return positiveNum;
    }
  }

  return positiveNum;
}

const nums1 = [1, 2, 0];
console.log(firstMissingPositive(nums1));

const nums2 = [3, 4, -1, 1];
console.log(firstMissingPositive(nums2));

const nums3 = [[7, 8, 9, 11, 12]];
console.log(firstMissingPositive(nums3));
