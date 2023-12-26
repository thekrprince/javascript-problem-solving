// Write a function which will calculate the sum of it's range.

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

const res = sumRange(3);
console.log(res);
