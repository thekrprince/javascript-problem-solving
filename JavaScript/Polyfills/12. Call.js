// Call function polyfill

let car1 = {
  name: "Mercedes",
};

let car2 = {
  name: "Bugatti",
};

function printColour(color) {
  console.log(`${this.name} has ${color} colour`);
}

Function.prototype.mycall = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Function is not callable");
  }

  obj.fn = this;
  obj.fn(...args);
};

printColour.mycall(car2, "Green");
printColour.call(car2, "Green");
