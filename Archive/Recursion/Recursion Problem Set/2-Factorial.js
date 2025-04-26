function factorial(num) {
  let totalVal = 1;

  if (num === 1 || num === 0) return 1;

  totalVal = num * factorial(num - 1);

  return totalVal;
}

var res = factorial(0);
console.log(res);
