/*
Given an array of integers nums, return the length of the longest consecutive sequence of elements.

A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.

You must write an algorithm that runs in O(n) time.
*/

function longestConsecutive(nums) {
  const set = new Set(nums);

  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let length = 1;

      while (set.has(nums[i] + length)) {
        length += 1;
      }

      //   Can use either one of below
      longest = longest > length ? longest : length;
      //   longest = Math.max(longest, length);
    }
  }
  return longest;
}

const result = longestConsecutive([100, 4, 200, 1, 3, 2]);
console.log(result);
const result1 = longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
console.log(result1);
const result2 = longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]);
console.log(result2);
