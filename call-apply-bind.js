// Call, Apply and Bind are used to borrow the object functions

let person = {
  firstName: 'Kumar',
  lastName: 'Prince',
  fullName: function () {
    console.log(this.firstName + ' ' + this.lastName);
  },
};

person.fullName();

// Call method
let person2 = {
  firstName: 'John',
  lastName: 'Snow',
};

person.fullName.call(person2);

// Individual method

let personDetails = function () {
  console.log(this.firstName + ' ' + this.lastName);
};

personDetails.call(person2);
