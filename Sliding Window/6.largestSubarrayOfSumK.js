// Longest subarray of sum k

function largestSubArrayOfSumK(arr, k) {
  let i = 0;
  let j = 0;

  let sum = 0;
  let max = 0;

  while (j < arr.length) {
    sum += arr[j];

    if (sum < k) {
      j++;
    } else if (sum === k) {
      max = Math.max(j - i + 1, max);
      j++;
    } else {
      while (sum > k) {
        sum -= arr[i];
        i++;
      }

      if (sum === k) {
        max = Math.max(j - i + 1, max);
      }

      j++;
    }
  }

  return max;
}

console.log(largestSubArrayOfSumK([4, 1, 1, 1, 2, 3, 5], 5));
console.log(largestSubArrayOfSumK([1, 2, 1, 0, 1, 1, 1], 4));
console.log(largestSubArrayOfSumK([2, 3, 5, 1, 9], 10));
console.log(largestSubArrayOfSumK([1, 2, 3, 7, 5], 12));
