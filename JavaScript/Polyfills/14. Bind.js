// Bind function polyfill
let programming = {
  language: "JavaScript",
};

function codeDaily(characteristic) {
  return console.log(`${this.language} is ${characteristic}`);
}

Function.prototype.mybind = function (obj = {}, ...args1) {
  if (typeof this !== "function") {
    throw new Error("Function is not callable");
  }

  obj.fn = this;

  return function (...args2) {
    obj.fn(...args1, ...args2);
  };
};

const res = codeDaily.mybind(programming);
res("hard");
