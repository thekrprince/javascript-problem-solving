# [LeetCode Is Hard Until You Learn THESE 8 Patterns](https://www.youtube.com/watch?v=RYT08CaYq6A)

- _Introduction:_

  - 8 important patterns for coding interviews split into two categories:
    - _Linear structures:_ arrays, linked lists, strings.
    - _Nonlinear structures:_ trees, graphs.
  - Focus on pre-built code templates for these patterns.

- _Linear Data Structure Patterns:_

  1. _Two Pointers:_
     - Reduces time complexity to linear time \(O(n)\).
     - Two methods:
       - Same direction: used for scanning data in a single pass (e.g., fast and slow pointers to detect cycles or find middle elements).
       - Opposite directions: used for finding pairs (e.g., sum of two numbers in a sorted array).
  2. _Sliding Window:_
     - Refines two pointers to manage a window of elements dynamically.
     - Expands or contracts the window to meet specific conditions (e.g., longest substring without repeating characters).
     - Often combined with hashmaps.
  3. _Binary Search:_
     - Efficiently finds target in logarithmic time \(O(\log n)\).
     - Extends to lists with monotonic conditions, not just sorted numbers.
     - Example: finding the minimum in a rotated sorted array.

- _Nonlinear Data Structure Patterns:_

  1. _Breadth-First Search (BFS):_
     - Explores nodes level by level.
     - Uses a queue to keep track of visited nodes (ideal for level order traversal).
  2. _Depth-First Search (DFS):_
     - Dives deep into one path before exploring others.
     - Often uses recursion and is memory efficient for exploring all paths.
     - Example: counting islands in a grid.
  3. _Backtracking:_
     - Extension of DFS, explores all possible solutions.
     - Builds the solution dynamically by making decisions and backtracking on invalid paths.
     - Example: letter combinations of a phone number.

- Heaps (Priority Queue):

  1. _Heaps:_
     - Used for questions related to top K, K smallest/largest.
     - _Min Heap:_ smallest value at the root.
     - _Max Heap:_ largest value at the root.
     - Max Heap is used to find K smallest values, and vice versa for K largest.

- Dynamic Programming (DP):

  1. _Dynamic Programming:_
     - Optimizes solutions by breaking problems into overlapping sub-problems.
     - Two approaches:
       - _Top-down:_ recursive with memoization to store results.
       - _Bottom-up:_ solves smaller sub-problems iteratively using a table.
     - Too complex for this video but covered in-depth on their website.
