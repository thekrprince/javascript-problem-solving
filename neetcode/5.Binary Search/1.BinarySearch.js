function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((right + left) / 2);

  while (left < right) {
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((right + left) / 2);
  }

  return -1;
}

const res = binarySearch([-1, 0, 3, 5, 9, 12], 9);
console.log(res);
