function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

var res = factorial(8);
console.log(res);
