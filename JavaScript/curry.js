let sum = function (a) {
  return function (b) {
    console.log('b', b);
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
};

const res = sum(1)(3)(4)();
console.log(res);
