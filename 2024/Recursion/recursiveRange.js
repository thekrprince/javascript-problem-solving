function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

const res = recursiveRange(6);
console.log(res);
