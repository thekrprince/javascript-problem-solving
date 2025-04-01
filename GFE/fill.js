// Lodash's fill method

function fill(array, value, start = 0, end = array.length) {
    const arrayLen = array.length;

    if(start < 0) {
        start += arrayLen;
    }

    if(end > arrayLen) {
        end = arrayLen;
    }

    if(end < 0) {
        end += arrayLen;
    }

    for(let i=start; i<end; i++) {
        array[i] = value;
    }

    return array;
}

console.log(fill([1, 2, 3, 4, 5], '*', 2, 4));
console.log(fill([1, 2], '*'));
console.log(fill([1, 2, 3, 4, 5], '*', -4, -1));
console.log(fill([1, 2, 3, 4, 5], '*', -1, -4));