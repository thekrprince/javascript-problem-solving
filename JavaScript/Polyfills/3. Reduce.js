// Polyfill of Reduce
Array.prototype.myReduce = function (callbackFn, initialValue) {
  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    acc = acc ? callbackFn(acc, this[i]) : this[i];
  }

  return acc;
};

let arr = [1, 2, 3, 4, 5];
const res = arr.myReduce((prev, curr) => prev + curr, 0);
console.log(res);

let arr1 = [-1, -3, -4];
const res1 = arr.myReduce((prev, curr) => prev + curr ** 2, 0);
console.log(res);
