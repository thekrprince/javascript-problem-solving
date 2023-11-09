/**
 * Write a function called maxSubArraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 **/

function maxSubArraySum(arr, num) {
  if (num > arr.length) return false;

  var max = 0;

  //   1st loop will run till "array.length - 1 + 1" so that it adds the required number.
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    // This loop will run to add the numbers and store it in the temp value.
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

const res = maxSubArraySum([2, 5, 5, 8, 2, 1, 9, 12], 3);
console.log(res);
