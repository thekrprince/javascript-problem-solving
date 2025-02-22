/*
Find Minimum in Rotated Sorted Array

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

Link -> https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
*/

function findMinimum(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[left];
}

const res1 = findMinimum([4, 5, 6, 7, 0, 1, 2]);
console.log(res1);
const res2 = findMinimum([3, 4, 5, 1, 2]);
console.log(res2);
const res3 = findMinimum([7, 8, 9, 1, 2, 3, 4, 5, 6]);
console.log(res2);
