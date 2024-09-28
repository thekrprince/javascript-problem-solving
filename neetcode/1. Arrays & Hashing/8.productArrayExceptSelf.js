/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

// Brute Force
function productOfArrayESelf(nums) {
  let productOfArray = 1;
  for (let i = 0; i < nums.length; i++) {
    productOfArray *= nums[i];
  }

  let productArray = [];
  for (let i = 0; i < nums.length; i++) {
    productArray.push(productOfArray / nums[i]);
  }
  return productArray;
}

console.log(productOfArrayESelf([1, 2, 3, 4]));
console.log(productOfArrayESelf([-1, 1, 0, -3, 3]));

// Optimised -> Since we have to multiply the prefix and postfix both. We will just multiply the prefix of the elements and later find out the postfix.
function productOfArrayESelf1(nums) {
  let res = [];
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = postfix * res[i];
    postfix *= nums[i];
  }

  return res;
}

console.log(productOfArrayESelf1([1, 2, 3, 4]));
console.log(productOfArrayESelf1([-1, 1, 0, -3, 3]));
