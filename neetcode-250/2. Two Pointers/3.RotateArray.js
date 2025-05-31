// File: 3.RotateArray.js

// Optimal solution with O(1) space.
function rotateArray1(nums, k) {
  k = k % nums.length;

  function reverse(left, right) {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }

  let i = 0,
    j = nums.length - 1;
  reverse(i, j);

  (i = 0), (j = k - 1);
  reverse(i, j);

  (i = k), (j = nums.length - 1);
  reverse(i, j);
}

rotateArray([1, 2, 3, 4, 5, 6, 7], 3); // [5, 6, 7, 1, 2, 3, 4]
rotateArray([-1, -100, 3, 99], 2); // [3, 99, -1, -100]

// This is the okay solution as the recommendation is to modify array in-place
function rotateArray(nums, k) {
  let res = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    // This below formula will take the required index when it's out of bound.
    let findIndexToPlace = (i + k) % nums.length;
    res[findIndexToPlace] = nums[i];
  }

  console.log(res);
}

rotateArray([1, 2, 3, 4, 5, 6, 7], 3); // [5, 6, 7, 1, 2, 3, 4]
rotateArray([-1, -100, 3, 99], 2); // [3, 99, -1, -100]
