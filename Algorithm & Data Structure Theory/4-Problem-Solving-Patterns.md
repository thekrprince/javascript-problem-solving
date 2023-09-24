# PROBLEM SOLVING PATTERNS

## Some common problem solving patterns which can help you approach different problems are

1. Frequency Counter
2. Multiple Pointers
3. Sliding Window
4. Divide and Conquer
5. Dynamic Programming
6. Greedy Algorithms
7. Backtracking
8. And many more

## Now let's understand the above patterns in detail-

1. **Frequency Counter:** Frequency counter is a pattern where we need to find out how often an element occurs within some data structure or array of elements. It uses objects or sets to collect values/frequencies of values. This can often avoid the need for **nested loops or O(n^2)** operations with array/strings.

   E.g. Write a function called same, which accepts 2 arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

   Solution: Algorithm & Data Structure Theory\same.js

2. **Multiple Pointers:** Multiple pointers is a programming technique used in algorithms to efficiently solve problems that involve iterating or comparing elements in an array or a linked list. This technique is particularly useful in scenarios where you need to track or manipulate multiple positions or elements within the data structure simultaneously.
   Here's a brief overview of how multiple pointers work and some common scenarios where they can be applied:

   - Two Pointers:

    Two pointers is one of the most common forms of multiple pointers. You maintain two pointers (usually initialized to different positions in the array or list) and manipulate them based on the problem requirements.

    Examples:
    Two Sum: Given an array of numbers, find two numbers that add up to a specific target sum. You can use two pointers to scan from both ends of the array, gradually moving them toward the center. Solution is Algorithm & Data Structure Theory\4.2-multiple-pointers1.js
    Reverse a String/Array: You can use two pointers, one starting from the beginning and the other from the end, and swap the elements until you reach the middle of the array.

   - Three Pointers:

    In some cases, you might need three pointers to solve a problem efficiently.

    Example:
    Three Sum: Given an array of numbers, find all unique triplets in the array that add up to a specific target sum. You can use three pointers and adjust their positions based on the sum of elements at those positions.
