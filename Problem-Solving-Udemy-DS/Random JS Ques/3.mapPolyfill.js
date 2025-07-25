Array.prototype.mapPolyfill = function (callbackFn) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callbackFn(this[i], i, this));
  }
  return temp;
};

let arr = [11, 22, 33, 44, 55];

const modifiedArr = arr.mapPolyfill((a) => a * 2);
console.log(modifiedArr);
