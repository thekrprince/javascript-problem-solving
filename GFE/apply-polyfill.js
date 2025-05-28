// https://www.greatfrontend.com/questions/javascript/function-apply?practice=practice&tab=coding

function printInConsole() {
  console.log(this.name);
}

function multiply(multiplier = 2, ...anotherNum) {
  console.log(anotherNum);
  return this.number * multiplier;
}

Function.prototype.myApply = function (thisArg, argArray) {
  thisArg = thisArg || globalThis;

  let uniqueFn = Symbol("fn");
  thisArg[uniqueFn] = this;

  return argArray ? thisArg[uniqueFn](...argArray) : thisArg[uniqueFn]();
};

let obj = {
  name: "greatFrontend",
  number: 3
};

printInConsole.myApply(obj);
console.log(multiply.myApply(obj, [6, 7, 8]));
