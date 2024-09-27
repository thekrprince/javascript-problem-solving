/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/

function findTopKFrequentElements(nums, k) {
  let countFrequency = {};

  for (let i = 0; i < nums.length; i++) {
    if (!countFrequency[nums[i]]) {
      countFrequency[nums[i]] = 1;
    } else {
      countFrequency[nums[i]] += 1;
    }
  }

  const sorted = Object.entries(countFrequency).sort((a, b) => b[1] - a[1]);

  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(parseInt(sorted[i][0]));
  }

  return res;
}

console.log(findTopKFrequentElements([1, 1, 1, 2, 2, 3], 2));
