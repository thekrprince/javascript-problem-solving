function subArraySumEqualsK(nums, k) {
  let count = 0;
  let sum = 0;

  let map = new Map();
  map.set(0, 1);

  for (let num of nums) {
    sum += num;

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }
  console.log(count);
}

const input1 = [1, -1, 1, 1, 1, 1];
const input2 = [1, 1, 1];
const input3 = [1, 2, 3];

subArraySumEqualsK(input1, 3);
subArraySumEqualsK(input2, 2);
subArraySumEqualsK(input3, 3);
