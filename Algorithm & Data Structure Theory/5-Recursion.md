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
- When JavaScript sees the return keyword or when the function ends, the compiler will removed (pop).

### Why do you care about call stack?

Generally, we're used to functions being pushed on the call stack and popped off when they are done.
But when we write recursive functions, we keep pushing new functions onto the call stack.

E.g. Algorithm & Data Structure Theory\examples\5-countdown.js
