/*
  Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum
  sum of a subarray with the length of the number passed to the function.

  Note that a subarray must consist of consecutive elements from the original array. In the first example 
  below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

  Solved using sliding window
*/

function maxSubarraySum(arr, num) {
  if (arr.length - 1 < num) return null;

  var maxSum = 0;
  var tempSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - num];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
}

var arrVal = [100, 200, 300, 400];
var res = maxSubarraySum(arrVal, 2);
console.log(`maxSum is ${res}`); // 700

var res2 = maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
console.log(res2); // 39
