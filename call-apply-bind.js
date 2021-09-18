// Call, Apply and Bind are used to borrow the object functions

let person = {
  firstName: 'Kumar',
  lastName: 'Prince',
  fullName: function () {
    console.log(this.firstName + ' ' + this.lastName);
  },
};

console.log(person.fullName());
