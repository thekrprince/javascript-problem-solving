// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times
// https://leetcode.com/problems/majority-element-ii/

// Done using the one iteration but still it's a better approach not the optimal one

function majorityElement(nums) {
  const countRequired = Math.floor(nums.length / 3) + 1;
  const obj = {};
  let majorityEle = [];

  for (let val of nums) {
    obj[val] = (obj[val] || 0) + 1;
    if (obj[val] === countRequired) {
      majorityEle.push(val);
    }
  }

  return majorityEle;
}

const nums = [3, 2, 3];
console.log(majorityElement(nums));

const nums2 = [1];
console.log(majorityElement(nums2));

const nums3 = [1, 2];
console.log(majorityElement(nums3));

const nums4 = [1, 1, 1, 2, 3, 2, 1, 2];
console.log(majorityElement(nums4));
