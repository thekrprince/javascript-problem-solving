// Lodash's dropRightWhile function

function dropRightWhile(array, predicate) {

}

dropRightWhile([1, 2, 3, 4, 5], (value) => value > 3); // => [1, 2, 3]
dropRightWhile([1, 2, 3], (value) => value < 6); // => []
dropRightWhile([1, 2, 3, 4, 5], (value) => value > 6); // => [1, 2, 3, 4, 5]
