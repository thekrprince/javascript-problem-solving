// Lodash's dropRightWhile function

function dropRightWhile(array, predicate) {
    let index = array.length - 1;

    while(index >= 0 && predicate(array[index])){
        index--;
    }

    return array.slice(0, index + 1);
}

console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 3)); // => [1, 2, 3]
console.log(dropRightWhile([1, 2, 3], (value) => value < 6)); // => []
console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 6)); // => [1, 2, 3, 4, 5]
console.log(dropRightWhile([1, , 3, 4, 5], (value) => value === undefined))