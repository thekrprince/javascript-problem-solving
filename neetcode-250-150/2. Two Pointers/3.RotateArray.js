// File: 3.RotateArray.js

function rotateArray(nums, k) {
  // TODO: Implement the function
  let res = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    let findIndexToPlace = (i + k) % nums.length;
    res[findIndexToPlace] = nums[i];
  }

  console.log(res);
}

rotateArray([1, 2, 3, 4, 5, 6, 7], 3); // [5, 6, 7, 1, 2, 3, 4]
rotateArray([-1, -100, 3, 99], 2); // [3, 99, -1, -100]
