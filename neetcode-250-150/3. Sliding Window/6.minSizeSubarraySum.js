// Minimum Size Subarray Sum - https://leetcode.com/problems/minimum-size-subarray-sum/

function minimumSubArrayLen(target, nums) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let minSubArrayLen = Infinity;

  while (j < nums.length) {
    sum += nums[j];

    if (sum < target) {
      j++;
    } else if (sum >= target) {
      while (sum >= target) {
        minSubArrayLen = Math.min(minSubArrayLen, j - i + 1);
        sum -= nums[i];
        i++;
      }
      j++;
    }
  }

  return minSubArrayLen === Infinity ? 0 : minSubArrayLen;
}

console.log(minimumSubArrayLen(10, [2, 1, 5, 1, 5, 3]));
console.log(minimumSubArrayLen(5, [1, 2, 1]));
console.log(minimumSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
