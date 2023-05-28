/*
Topic - Function input and Output

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.

link => https://leetcode.com/problems/allow-one-function-call/?utm_campaign=PostD8&utm_medium=Post&utm_source=Post&gio_link_id=a9By01Oo
*/

var once = function(fn) {
    let flag = false;
    return function(...args){
        if(!flag) {
            flag = true;
            return fn(...args);
        }
        return undefined;
    }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
 
console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn
