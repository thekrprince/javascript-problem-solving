Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

let arr = [54, 11, 46, 4, 10];

const res = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(res);
const res1 = arr.reduce((acc, curr) => acc + curr, 100);
console.log(res1);
