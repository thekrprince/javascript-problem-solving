/* Implement a function makeCounter that accepts an optional integer value (defaults to 0) and returns an object that contains the following methods:

    get(): returns the current value.
    increment(): increments the current value and returns it.
    decrement(): decrements the current value and returns it.
    reset(): resets the current value to the initial value.

    Link -> https://www.greatfrontend.com/questions/javascript/make-counter-ii
*/

function makeCounter(initialVal = 0) {
  let count = 0;

  return {
    get: () => count,
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = initialVal),
  };
}

const counter = makeCounter();
console.log(counter.get());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.get());
console.log(counter.reset());
