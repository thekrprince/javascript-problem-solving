// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

function majorityElement(nums) {
  let ele1, ele2;
  let countOfEle1 = 0,
    countOfEle2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (countOfEle1 === 0 && nums[i] !== ele2) {
      countOfEle1 = 1;
      ele1 = nums[i];
    } else if (countOfEle2 === 0 && nums[i] !== ele1) {
      countOfEle2 = 1;
      ele2 = nums[i];
    } else if (ele1 === nums[i]) {
      countOfEle1++;
    } else if (ele2 === nums[i]) {
      countOfEle2++;
    } else {
      countOfEle1--;
      countOfEle2--;
    }
  }

  let list = [];
  countOfEle1 = 0;
  countOfEle2 = 0;
  const minimumNRequired = Math.floor(nums.length / 3) + 1;

  for (let val of nums) {
    if (val === ele1) countOfEle1++;
    if (val === ele2) countOfEle2++;
  }

  if (countOfEle1 >= minimumNRequired) list.push(ele1);
  if (countOfEle2 >= minimumNRequired) list.push(ele2);

  return list;
}

const nums1 = [3, 2, 3];
console.log(majorityElement(nums1));

const nums2 = [1, 1, 1, 2, 2, 2, 3, 4, 5, 2];
console.log(majorityElement(nums2));
