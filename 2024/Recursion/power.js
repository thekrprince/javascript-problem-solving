function power(base, exp) {
  if (exp === 1) return base;
  return base * power(base, exp - 1);
}

const res = power(5, 4);
console.log(res);
