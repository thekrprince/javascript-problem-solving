function dropWhile(array, predicate) {
    let index = 0;

    while(index < array.length && predicate(array[index], index, array)) {
        index++;
    }

    return array.slice(index);
}

console.log(dropWhile([1, 2, 3, 4, 5], (value) => value < 3)); // => [3, 4, 5]
console.log(dropWhile([1, 2, 3], (value) => value < 6)); // => []