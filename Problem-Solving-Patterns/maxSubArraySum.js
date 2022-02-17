/* Write a function called maxSubArraySum which accepts an array of integers and a number called n. The 
function should calculate the maximum sum of n consecutive elements in the array. */

// Can be solved using sliding window pattern

/*
  maxSubArraySum([1,2,5,2,8,1,5], 2)      // 10
  maxSubArraySum([1,2,5,2,8,1,5], 4)      // 17
  maxSubArraySum([4,2,1,6], 1)            // 6
  maxSubArraySum([4,2,1,6,2], 4)          // 13
  maxSubArraySum([], 4)                   // null
*/

/******************** Brute Force Solution *****************/

function maxSubArraySum(arr, num) {
  if (num > arr.length) return null;

  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

/******************* Optimized Solution ********************/
function maxSubArraySum2(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  // console.log(tempSum);
  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

var res = maxSubArraySum2([4, 2, 1, 6, 2, 5, 0, 1, 3, 4], 4);
console.log(res);
