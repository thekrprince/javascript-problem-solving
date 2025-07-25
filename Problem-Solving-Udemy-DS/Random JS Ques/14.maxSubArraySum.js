function maxSubArraySum(arr, num) {
  let maxSum = 0;

  for (let i = 0; i <= arr.length - num; i++) {
    let tempSum = 0;
    let j = 0;
    while (j < num) {
      tempSum = tempSum + arr[i + j];
      j++;
    }

    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([100, 200, 300, 400], 4));
console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubArraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubArraySum([2, 3], 3)); // null
