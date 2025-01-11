/**
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
 */

// This is n X m. A naive solution

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (left <= right) {
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    console.log("mid", nums[middle]);

    if (nums[middle] === target) return true;

    middle = Math.floor((left + right) / 2);
  }

  return false;
}

function searchATwoDMatrix(matrix, target) {
  for (let m = 0; m < matrix.length; m++) {
    if (matrix[m][0] <= target && matrix[m][matrix[m].length - 1] >= target) {
      const isTargetFound = binarySearch(matrix[m], target);
      if (isTargetFound) return true;
    }
  }

  return false;
}

console.log(
  searchATwoDMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    21
  )
);

console.log(searchATwoDMatrix([[1, 3]], 3));
console.log(
  searchATwoDMatrix(
    [
      [-8, -7, -5, -3, -3, -1, 1],
      [2, 2, 2, 3, 3, 5, 7],
      [8, 9, 11, 11, 13, 15, 17],
      [18, 18, 18, 20, 20, 20, 21],
      [23, 24, 26, 26, 26, 27, 27],
      [28, 29, 29, 30, 32, 32, 34],
    ],
    -5
  )
);
