// Range Sum Query - Immutable - https://leetcode.com/problems/range-sum-query-immutable/description/

var NumArray = function (nums) {
  this.prefixes = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    this.prefixes[i + 1] = this.prefixes[i] + nums[i];
  }
};

NumArray.prototype.sumRange = function (left, right) {
  return this.prefixes[right + 1] - this.prefixes[left];
};

let obj = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(obj.prefixes);
console.log(obj.sumRange(0, 2));
console.log(obj.sumRange(2, 5));
console.log(obj.sumRange(0, 5));
