// Sort 0's and 1's in an array

function sortZeroesAndOnes(nums) {
  let i = 0,
    j = nums.length - 1;

  while (i < j) {
    if (nums[i] > nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    } else if (nums[i] === 0 && nums[j] === 0) {
      i++;
    } else {
      i++;
      j--;
    }
  }

  console.log(nums);
}

const input1 = [0, 1, 0, 1, 1, 0, 0];
const input2 = [1, 1, 1, 0, 0, 0];
const input3 = [1, 0, 1, 0, 1, 0];
sortZeroesAndOnes(input1);
sortZeroesAndOnes(input2);
sortZeroesAndOnes(input3);
