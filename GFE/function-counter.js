/*
Implement a function makeCounter that accepts an optional integer value and returns a function. When the returned function is called initially,
it returns the initial value if provided, otherwise 0.
The returned function can be called repeatedly to return 1 more than the return value of the previous invocation.

Note:- This solution is using the closure
*/

function counter(initialVal = 0) {
  let count = initialVal - 1;
  return function () {
    count += 1;
    return count;
  };
}

const count = counter(0);
console.log(count());
console.log(count());
console.log(count());
console.log(count());

const count1 = counter(5);
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());
