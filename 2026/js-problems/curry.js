// Currying - https://javascript.info/currying-partials
// Currying is the process of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument.

function sum(num) {
    return function (a) {
        return function (b) {
            return a * b * num;
        };
    };
}

console.log(sum(2)(3)(4));

function multiplier(factor) {
    return function (num) {
        return factor * num;
    };
}

const double = multiplier(2);
const triple = multiplier(3);
console.log(double(10));
console.log(triple(20));

// Using arrow function
const multiplier1 = (factor) => (num) => factor * num;

const double1 = multiplier(2);
const triple1 = multiplier(3);
console.log(double1(10));
console.log(triple1(20));
