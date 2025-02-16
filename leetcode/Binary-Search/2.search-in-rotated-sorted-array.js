/*
There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is
[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.

Link: https://leetcode.com/problems/search-in-rotated-sorted-array/description/
*/

function searchInRotatedSortedArray(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log("left", left);
    console.log("right", right);
    console.log("mid", mid);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] >= nums[left]) {
      if (nums[left] <= target && target <= nums[mid]) {
        console.log(nums[left] <= target <= nums[mid]);
        console.log(nums[left], target, nums[mid]);
        console.log("first");
        right = mid - 1;
      } else {
        left = mid + 1;
        console.log("second");
      }
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
        console.log("third");
      } else {
        right = mid - 1;
        console.log("fourth");
      }
    }
  }

  return -1;
}

const res1 = searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0);
console.log(res1);
