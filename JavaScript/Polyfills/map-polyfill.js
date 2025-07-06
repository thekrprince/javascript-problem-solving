Array.prototype.myMap = function (callback) {
  console.log(callback);
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

let myArr = [2, 3, 4];
let res = myArr.myMap((data) => data + 1);
console.log(res);
