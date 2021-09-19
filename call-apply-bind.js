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

// Call method with parameter
let personWork = function (jobTitle) {
  console.log(this.firstName + ' ' + this.lastName + ' works as a ' + jobTitle);
};

let person3 = {
  firstName: 'J.K',
  lastName: 'Rowling',
};

personWork.call(person3, 'Writer');

// Apply method
let personWorkPlace = function (jobTitle, place) {
  console.log(
    this.firstName +
      ' ' +
      this.lastName +
      ' works as a ' +
      jobTitle +
      ' in ' +
      place
  );
};

let person4 = {
  firstName: 'The',
  lastName: 'KrPrince',
};

personWork.apply(person4, ['SDE', 'Bangalore']);
