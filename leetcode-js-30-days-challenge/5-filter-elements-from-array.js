/*
Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.

The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

Please solve it without the built-in Array.filter method.

link: https://leetcode.com/problems/filter-elements-from-array/?utm_campaign=PostD5&utm_medium=Post&utm_source=Post&gio_link_id=a9a5VZr9
*/

var filter = function(arr, fn) {
    const newArr = [];
    for(var i=0; i<arr.length; i++) {
        const temp = fn(arr[i], i);
        if(temp) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

function greaterThan10(n) { return n > 10; }
const foo = filter([0,10,20,30], greaterThan10);
console.log(foo); // [20, 30]

function firstIndex(n, i) { return i === 0; }
const foo2 = filter([1,2,3], firstIndex);
console.log(foo2); // [1]

function plusOne(n) { return n + 1 }
const foo3 = filter([-2,-1,0,1,2], plusOne);
console.log(foo3); // [ -2, 0, 1, 2 ]
