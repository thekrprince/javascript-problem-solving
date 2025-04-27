// Return the maximum sum of the array within a given window

function maxSum(arr, k) {
  let i = 0,
    j = 0;

  let sum = 0;
  let max = -Infinity;

  while (j < arr.length) {
    sum += arr[j];
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      max = Math.max(max, sum);
      sum = sum - arr[i];
      j++;
      i++;
    }
  }

  return max;
}

console.log(maxSum([2, 1, 3, 4, 1, 6, 2, 9], 3));
console.log(maxSum([2, 5, 1, 8, 2, 9, 1], 3));
