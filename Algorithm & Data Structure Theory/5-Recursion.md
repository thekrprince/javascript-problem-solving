# RECURSION

- A process (a function in our case) that calls itself.

## Why do you need to know this?

- Because it's everywhere.
  1. JSON.parse / JSON.stringify
  2. document.getElementById and DOM traversal algorithms
  3. Object traversal
  4. Very common with more complex algorithms
  5. It's sometimes a cleaner alternative to iteration

## How recursive function work?

- Invoke the same function with a different input until you reach your base case!

**Base Case -** The condition when the recursion ends.

**Two essential parts of a recursive function!**

- Base Case
- Different Input

### Before diving into the example, let's learn call stack

- It's a stack data structure.
- Any time a function is invoked it is placed (pushed) on the top of the call stack.
- When JavaScript sees the return keyword or when the function ends, the compiler will be removed (pop).

### Why do you care about call stack?

Generally, we're used to functions being pushed on the call stack and popped off when they are done.
But when we write recursive functions, we keep pushing new functions onto the call stack.

E.g. Algorithm & Data Structure Theory\examples\5.1-countdown.js
Algorithm & Data Structure Theory\examples\5.2-sumRange.js

### Where things go wrong with recursion

-> No base case.
-> Forget to return or returning the wrong thing.
-> Stack overflow!
-> Too many nested calls.

### Pure recursion tips

1. For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you don't mutate them.
2. Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of string.
3. To make copies of objects use Object.assign(), or the spread operator.
