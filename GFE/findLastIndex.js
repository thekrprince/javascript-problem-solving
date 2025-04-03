// GFE - https://www.greatfrontend.com/questions/javascript/find-last-index?practice=practice&tab=coding

function findLastIndex(array, predicate, fromIndex = array.length - 1) {
    let length = array.length;

    let startIndex = fromIndex < 0 ? Math.max(fromIndex + length, 0) : Math.min(fromIndex, length - 1);

    while(startIndex >= 0) {
        if(predicate(array[startIndex])) {
            return startIndex;
        }

        startIndex--;
    }

    return -1;
}

const arr = [5, 4, 3, 2, 1];

console.log(findLastIndex(arr, (num) => num > 3)); // => 1
console.log(findLastIndex(arr, (num) => num > 1, 3)); // => 3
console.log(findLastIndex(arr, (num) => num < 1, 3)); // => -1