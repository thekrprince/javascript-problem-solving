/** 
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 * The function composition of an empty list of functions is the identity function f(x) = x.
 * You may assume each function in the array accepts one integer as input and returns one integer as output.
 * 
 * Link -> https://leetcode.com/problems/function-composition/?utm_campaign=PostD7&utm_medium=Post&utm_source=Post&gio_link_id=4PY7wZM9
 **/

var compose = function(functions) {
	return function(x) {
        if(functions.length === 0) {
            return x;
        }

        let temp = x;
        for(let i=functions.length-1; i >=0; i--) {
            temp = functions[i](temp);
        }
        return temp;
    }
};

const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4));
const fn2 = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn2(4));
const fn3 = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(fn3(1));
const fn4 = compose([]);
console.log(fn4(27));
