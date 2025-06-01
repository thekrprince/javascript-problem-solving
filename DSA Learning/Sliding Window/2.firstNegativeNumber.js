// First negative number in every Window of Size K

function firstNegativeNumber(nums, k) {
  let i = 0;
  let j = 0;
  let res = [];
  let negativeNumberList = [];

  while (j < nums.length) {
    if (nums[j] < 0) {
      negativeNumberList.push(nums[j]);
    }

    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      if (negativeNumberList.length === 0) {
        res.push(0);
      } else {
        res.push(negativeNumberList[0]);
        if (nums[i] === negativeNumberList[0]) {
          negativeNumberList.splice(0, 1);
        }
      }
      i++;
      j++;
    }
  }
  return res;
}

console.log(firstNegativeNumber([12, -1, -7, 8, -15, 30, 16, 28], 3));
