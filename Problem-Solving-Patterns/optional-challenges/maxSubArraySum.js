/*
  Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum
  sum of a subarray with the length of the number passed to the function.
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
console.log(`maxSum is ${res}`);
