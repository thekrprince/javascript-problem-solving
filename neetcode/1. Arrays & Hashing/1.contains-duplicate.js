/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }

  console.log(obj);

  for (let key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
