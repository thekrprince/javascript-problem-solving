// Apply function polyfill

let place = {
  name: "Paris",
};

function describeCity(speciality) {
  console.log(`${this.name} is ${speciality}`);
}

Function.prototype.apply = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Function is not callable");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  obj.fn = this;
  obj.fn(...args);
};

describeCity.apply(place, ["beautiful", "Elegant"]);
// describeCity.apply(place, "beautiful");
