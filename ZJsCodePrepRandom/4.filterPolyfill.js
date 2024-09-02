Array.prototype.myFilter = function (callbackFn) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

let arr = [244, 477, 938, 18, 55];

const modifiedArr = arr.myFilter((a) => a % 2 === 0);
console.log(modifiedArr);
