// https://www.greatfrontend.com/questions/javascript/function-call?practice=practice&tab=coding
function multiplyLuckyNum() {
  return this.num * 100;
}

Function.prototype.myCall = function (thisArg, ...args) {
  thisArg = thisArg || globalThis;

  let tempFn = "_tempFn";
  thisArg[tempFn] = this;

  return args ? thisArg[tempFn](...args) : thisArg[tempFn]();
};

let obj1 = {
  name: "Prince",
  num: 9,
};

console.log(multiplyLuckyNum.myCall(obj1, "hello", "world"));
