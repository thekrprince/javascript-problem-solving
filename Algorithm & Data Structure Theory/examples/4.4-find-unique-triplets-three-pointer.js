/**
 * Three Sum: Given an array of numbers, find all unique triplets in the array that add up to a specific target sum.
 * You can use three pointers and adjust their positions based on the sum of elements at those positions.
 **/

function findUniqueTriplets(nums, target) {
  nums.sort((a, b) => a - b); // Sort the input array in ascending order.
  const triplets = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const currentSum = nums[i] + nums[left] + nums[right];

        if (currentSum === target) {
          triplets.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
          while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
          left++;
          right--;
        } else if (currentSum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return triplets;
}

const result = findUniqueTriplets([11, 7, 5, 9, 8, -6, 16, 17, -2], 3);
console.log(result);
const result1 = findUniqueTriplets([11, 7, 5, 9, 8, -6, 16, 17, -2], 0);
console.log(result1);
