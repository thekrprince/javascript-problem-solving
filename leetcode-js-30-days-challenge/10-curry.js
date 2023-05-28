/*
Topic - Function input and Output

Given a function fn, return a curried version of that function.

A curried function is a function that accepts fewer or an equal number of parameters as the original function and returns either another curried function or the same value the original function would have returned.

In practical terms, if you called the original function like sum(1,2,3), you would call the curried version like csum(1)(2)(3), csum(1)(2,3), csum(1,2)(3), or csum(1,2,3). All these methods of calling the curried function should return the same value as the original.
*/

var curry = function(fn) {
    return function curried(...args) {
        if(args.length < fn.length) {
            return function(...args2) {
                return curried(...args, ...args2)
            }
        }
        return fn(...args);
    };
};

function sum(a, b) { return a + b; }
const csum = curry(sum);
console.log(csum(1)(2)); // 3

function sum2(a, b, c) { return a + b + c; }
const csum2 = curry(sum2);
console.log(csum2()()(1)(2)(5)); // 8
console.log(csum2(3)()(1)(2)); // 6