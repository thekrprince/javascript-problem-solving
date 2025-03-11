Array.prototype.square = function () {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(this[i] * this[i]);
  }
  return res;
};

const arr1 = [1, 2, 3, 4];
const res = arr1.square();
console.log(res);
