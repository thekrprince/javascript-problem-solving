// https://www.greatfrontend.com/questions/javascript/function-apply?practice=practice&tab=coding

function printInConsole() {
  console.log(this.name);
}

Function.prototype.myApply = function (thisArg, argArray) {
  thisArg = thisArg || globalThis;

  let uniqueFn = Symbol("fn");
  thisArg[uniqueFn] = this;

  return argArray ? thisArg[uniqueFn](...argArray) : thisArg[uniqueFn]();
};

let obj = {
  name: "greatFrontend",
};

printInConsole.myApply(obj);
