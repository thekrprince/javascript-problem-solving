/*
Topic - Basic Array Transforms

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

link: https://leetcode.com/problems/apply-transform-over-each-element-in-array/?utm_campaign=PostD4&utm_medium=Post&utm_source=Post&gio_link_id=noqbNOv9
*/

var map = function(arr, fn) {
    var res = []
    for(var i=0; i<arr.length; i++) {
        res.push(fn(arr[i], i));
    }
    return res;
};

function plusone(n) { return n + 1; }
const foo = map([10, 20, 30, 40], plusone);
console.log(foo); // [11, 21, 31, 41]

function plusI(n, i) { return n + i; }
const foo2 = map([10, 20, 30, 40], plusI);
console.log(foo2); // [ 10, 21, 32, 43 ]

function constant() { return 42; }
const foo3 = map([10, 20, 30, 40], constant);
console.log(foo3); // [ 42, 42, 42, 42 ]
