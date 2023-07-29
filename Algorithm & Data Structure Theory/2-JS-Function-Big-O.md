# Basics in JavaScript and it's complexity

## Objectives

- Understanding how objects and arrays works, through the lens of Big O.
- Explain why adding elements to the beginning of an arrays is costly.
- Compare and contrast the run time for arrays and objects, as sell as built -in methods.

## The Big O of Objects

### When to use objects

- When you don't need order
- When you need fast access/insertion and removal

### Big O of objects

1. Insertion - O(1)
2. Removal - O(1)
3. Searching -O(N)
4. Access - O(1)

### Big O of Object methods

1. Object.keys - O(N)
2. Object.values - O(N)
3. Object.entries - O(N)
4. hasOwn Property - O(1)

## Arrays

### When to use Arrays

- When you need order
- When you need fast access/insertion and removal (sort of)

### Big O of Arrays

1. Insertion - It depends
2. Removal - It depends
3. Searching - O(N)
4. Access - O(1)

### Big O of Array methods

1. push - O(1)
2. pop - O(1)
3. shift - O(N)
4. unshift - O(N)
5. concat - O(N)
6. slice - O(N)
7. splice - O(N)
8. sort - O(N X LogN)
9. forEach/map/filter/reduce.-O(N)
