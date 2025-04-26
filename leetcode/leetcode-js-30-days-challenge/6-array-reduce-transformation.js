/*
Topic - Basic Array Transforms

Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.

Please solve it without using the built-in Array.reduce method.

link: https://leetcode.com/problems/array-reduce-transformation/?utm_campaign=PostD6&utm_medium=Post&utm_source=Post&gio_link_id=nPN45jD9
*/

var reduce = function(nums, fn, init) {
    if(nums.length === 0) {
        return init;
    }
    let res = init;
    for(var i=0; i<nums.length; i++) {
        res = fn(res, nums[i]);
    }
    return res;
};

function sum(accum, curr) { return accum + curr; }
const foo = reduce([1,2,3,4], sum, 0);
console.log(foo); // 10

function sum2(accum, curr) { return accum + curr * curr; }
const foo2 = reduce([1,2,3,4], sum2, 100);
console.log(foo2); // 130

function sum3(accum, curr) { return 0; }
const foo3 = reduce([], sum3, 25);
console.log(foo3); // 25