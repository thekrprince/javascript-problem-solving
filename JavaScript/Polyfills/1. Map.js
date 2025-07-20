// Polyfill based on GFE
Array.prototype.myMap = function (callbackFn, thisArg) {
  const len = this.length;
  const res = new Array(len);

  for (var i = 0; i < len; i++) {
    if (i in this) {
      res[i] = callbackFn.call(thisArg, this[i], i, this);
    }
  }
  return res;
};

let myArr = [2, 3, 4];
let res = myArr.myMap((data) => data + 1);
console.log(res);

// Simple Map Polyfill
Array.prototype.simpleMap = function (callbackFn) {
  const res = [];

  for (var i = 0; i < this.length; i++) {
    res.push(callbackFn(this[i], i, this));
  }
  return res;
};

let res2 = myArr.simpleMap((data) => data * 2);
console.log(res2);
