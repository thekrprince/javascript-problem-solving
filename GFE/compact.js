// Lodash's compact method

function compact(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const val = array[i];

    if (val) {
      result.push(val);
    }
  }

  return result;
}

console.log(compact([0, 1, false, 2, "", 3, null]));
console.log(compact(["hello", 123, [], {}, function () {}]));
