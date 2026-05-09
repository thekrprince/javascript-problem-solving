// GFE - https://www.greatfrontend.com/questions/javascript/make-counter?practice=practice&tab=coding

// A closure in JavaScript is a feature where an inner function retains access to the variables of its outer (enclosing) function, 
// even after that outer function has finished executing.
// Essentially, a closure is the combination of a function and its lexical environment—a "backpack" of variables it carries wherever it goes.
// Core Characteristics:::::
// Access to Outer Scope: Closures give inner functions access to variables defined in their parent's scope. 
// Persistence: Variables inside a closure are not garbage-collected as long as the closure exists, allowing the function to "remember" state between calls.
// Live Bindings: Closures store references to variables, not static values. If the outer variable changes, the closure reflects that change.

function counter(defaultVal = 0) {
  let count = defaultVal;

  return () => {
    count += 1;
    return count;
  };
}

const res = counter();
console.log(res());
console.log(res());
console.log(res());
console.log(res());

function counter1(defaultVal = 0) {
  let count = defaultVal;

  return () => {
    return count++;
  };
}

const res1 = counter1();
console.log(res1());
console.log(res1());
console.log(res1());
console.log(res1());
