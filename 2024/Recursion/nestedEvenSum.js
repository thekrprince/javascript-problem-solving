/*
Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
*/

function nestedEvenSum(obj) {
  let sum = 0;
  for (key in obj) {
    if (typeof obj[key] === "object") {
      return (sum += nestedEvenSum(obj[key]));
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

console.log(nestedEvenSum(obj1));
