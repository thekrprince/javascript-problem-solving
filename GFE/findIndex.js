// Great Frontend - https://www.greatfrontend.com/questions/javascript/find-index?practice=practice&tab=coding

function findIndex(array, predicate, fromIndex = 0) {
    let i = fromIndex < 0 ? fromIndex + arrayLength : fromIndex;

    while(i < array.length) {
        const pred = predicate(array[i]);

        if(pred) return i;

        i++;
    }

    return -1;
}

console.log(findIndex([], (num) => num % 2 === 0));
console.log(findIndex([4, 12, 8, 130, 44], (num) => num % 2 === 0));
console.log(findIndex([5, 12, 8, 130, 44], (num) => num % 2 === 0));