// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// The algorithm used to solve this is known as 'Boyer-Moore Voting' Algorithm

function majorityElement(nums) {
  let count = 0,
    res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) res = nums[i];

    if (res === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return res;
}

const nums1 = [3, 2, 3];
console.log(majorityElement(nums1));

const nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums2));
