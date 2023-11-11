# PROBLEM SOLVING PATTERNS

## Some common problem solving patterns which can help you approach different problems are

1. Frequency Counter
2. Multiple Pointers
3. Sliding Window
4. Divide and Conquer
5. Dynamic Programming
6. Greedy Algorithm
7. Backtracking
8. And many more

## Now let's understand the above patterns in detail-

1. **Frequency Counter:** Frequency counter is a pattern where we need to find out how often an element occurs within some data structure or array of elements. It uses objects or sets to collect values/frequencies of values. This can often avoid the need for **nested loops or O(n^2)** operations with array/strings.

   E.g. Write a function called same, which accepts 2 arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

   Solution: Algorithm & Data Structure Theory\4.1-same-frequency-counter.js

2. **Multiple Pointers:** Multiple pointers is a programming technique used in algorithms to efficiently solve problems that involve iterating or comparing elements in an array or a linked list. This technique is particularly useful in scenarios where you need to track or manipulate multiple positions or elements within the data structure simultaneously.
   Here's a brief overview of how multiple pointers work and some common scenarios where they can be applied:

   - Two Pointers:

    Two pointers is one of the most common forms of multiple pointers. You maintain two pointers (usually initialized to different positions in the array or list) and manipulate them based on the problem requirements.

    Examples:
    Two Sum: Given an array of numbers, find two numbers that add up to a specific target sum. You can use two pointers to scan from both ends of the array, gradually moving them toward the center. Solution is Algorithm & Data Structure Theory\4.2-multiple-pointers1.js
    Reverse a String/Array: You can use two pointers, one starting from the beginning and the other from the end, and swap the elements until you reach the middle of the array. Solution: Algorithm & Data Structure Theory\4.2-multiple-pointers1.js and Algorithm & Data Structure Theory\4.3-reverse-an-array-multiplePointers2.js

   - Three Pointers:

    In some cases, you might need three pointers to solve a problem efficiently.

    Example:
    Three Sum: Given an array of numbers, find all unique triplets in the array that add up to a specific target sum. You can use three pointers and adjust their positions based on the sum of elements at those positions.

    NOTE: If array is not sorted then sort it before solving.

3. **Sliding Window:** This pattern involves creating a window which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes(and a new window is created). It's very useful for keeping track of a subset of data in an array/string etc.

   E.g. Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
   Solution: Algorithm & Data Structure Theory\4.5-maxSubArraySum-SlidingWindow.js

4. **Divide and Conquer:** The "divide and conquer" pattern is a problem-solving technique that involves breaking down a problem into smaller sub-problems, solving them independently, and then combining their solutions to solve the original problem. This approach is often used in algorithm design and can be applied to various types of problems.
   This pattern can tremendously decrease time complexity.

   E.g. Given a sorted array of integers, write a function called search, that accepts a value passed to the function is located. If the value is not found, return -1.
   Solution: Algorithm & Data Structure Theory\4.6-findTheIndex-divideandconq.js
