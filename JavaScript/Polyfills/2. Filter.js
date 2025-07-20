// Simple polyfill for filter function
Array.prototype.myFilter = function (callbackFn) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      res.push(this[i]);
    }
  }

  return res;
};

let arr = [2, 3, 4, 5, 6];
const res = arr.myFilter((ele) => ele % 2 === 0);
console.log(res);
