const addByTwo = (val) => {
  return val + 2;
};

const sum = (fn, val) => {
  return fn(val);
};

const res = sum(addByTwo, 5);
console.log(res);
