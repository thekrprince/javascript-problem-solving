/**
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
 */

function maxArea1(height) {
  let maxArea = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    if (area > maxArea) {
      maxArea = area;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

console.log(maxArea1([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea1([1, 1]));

// Brute Force
function maxArea(height) {
  let maximum = 0;

  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      if (height[i] < height[j]) {
        let temp = height[i] * (j - i);
        maximum = maximum < temp ? temp : maximum;
      } else {
        let temp = height[j] * (j - i);
        maximum = maximum < temp ? temp : maximum;
      }
    }
  }

  return maximum;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
