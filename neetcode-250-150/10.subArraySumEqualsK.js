// Subarray Sum Equals K - link: https://leetcode.com/problems/subarray-sum-equals-k/description/
/* Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
   A subarray is a contiguous non-empty sequence of elements within an array. */

function subarraySumEqualsK(nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum === k) {
        count++;
      }
    }
  }

  return count;
}

const nums1 = [1, 2, 3];
const nums2 = [1, 1, 1];

console.log(subarraySumEqualsK(nums1, 3));
console.log(subarraySumEqualsK(nums2, 2));
