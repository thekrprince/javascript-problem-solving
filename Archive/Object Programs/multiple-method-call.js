const obj = {
  total: 0,
  add: function (param) {
    this.total += param;
    return this;
  },
  multiply: function (param) {
    this.total *= param;
    return this;
  },
  sub: function (param) {
    this.total -= param;
    return this;
  },
};

obj.add(5).multiply(10).sub(5);
console.log(obj.total);
