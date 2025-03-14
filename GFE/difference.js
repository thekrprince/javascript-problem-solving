// Lodash's difference method
/*
difference([1, 2, 3], [2, 3]); // => [1]
difference([1, 2, 3, 4], [2, 3, 1]); // => [4]
difference([1, 2, 3], [2, 3, 1, 4]); // => []
difference([1, , 3], [1]); // => [3]
*/

function difference(array, values) {
  const result = [];

  const valuesSet = new Set(values);

  for (let i = 0; i < array.length; i++) {
    const val = array[i];

    if (!valuesSet.has(val) && val !== undefined) {
      result.push(val);
    }
  }

  return result;
}

console.log(difference([1, 2, 3], [2, 3]));
console.log(difference([1, 2, 3, 4], [2, 3, 1]));
console.log(difference([1, 2, 3], [2, 3, 1, 4]));
console.log(difference([1, , 3], [1]));

// Using filter fn
function difference1(array, values) {
  const valuesSet = new Set(values);
  return array.filter((val) => !valuesSet.has(val));
}

console.log(difference1([1, 2, 3], [2, 3]));
console.log(difference1([1, 2, 3, 4], [2, 3, 1]));
console.log(difference1([1, 2, 3], [2, 3, 1, 4]));
console.log(difference1([1, , 3], [1]));
