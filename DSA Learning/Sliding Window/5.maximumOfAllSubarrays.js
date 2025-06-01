// Maximum of all subarrays of size k

function maximumOfAllSubArrays(nums, k) {
  let i = 0;
  let j = 0;
  let res = [];
  let deque = [];

  while (j < nums.length) {
    while (deque.length > 0 && deque[deque.length - 1] < nums[j]) {
      deque.pop();
    }

    deque.push(nums[j]);

    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      res.push(deque[0]);

      if (deque[0] === nums[i]) {
        deque.shift();
      }

      i++;
      j++;
    }
  }

  return res;
}

console.log(maximumOfAllSubArrays([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maximumOfAllSubArrays([9, 5, 3, 1, 6, 3], 2));
console.log(maximumOfAllSubArrays([4, 3, 5, 4, 3, 3, 6, 7], 3));

// Edge cases
console.log(maximumOfAllSubArrays([4, 2, 12, 3, 5], 1));

let arr = [2, 1, 3, 4, 6, 3, 8];
console.log(maximumOfAllSubArrays(arr, arr.length));
