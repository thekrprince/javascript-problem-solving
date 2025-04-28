// Maximum of all subarrays of size k

function maximumOfAllSubArrays(nums, k) {
  let i = 0;
  let j = 0;
  let res = [];
  let tempNumsOfSizeK = [];

  while (j < nums.length) {
    tempNumsOfSizeK.push(nums[j]);
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      console.log("tempNumsOfSizeK", tempNumsOfSizeK);
      if (
        tempNumsOfSizeK[0] > tempNumsOfSizeK[2] &&
        tempNumsOfSizeK[0] > tempNumsOfSizeK[1]
      ) {
        res.push(tempNumsOfSizeK[0]);
      } else if (
        tempNumsOfSizeK[1] > tempNumsOfSizeK[2] &&
        tempNumsOfSizeK[1] > tempNumsOfSizeK[0]
      ) {
        res.push(tempNumsOfSizeK[1]);
      } else {
        res.push(tempNumsOfSizeK[2]);
      }
      tempNumsOfSizeK.splice(0, 1);
      i++;
      j++;
    }
  }

  return res;
}

console.log(maximumOfAllSubArrays([1, 3, -1, -3, 5, 3, 6, 7], 3));
