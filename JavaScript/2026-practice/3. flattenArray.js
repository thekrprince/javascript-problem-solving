// Flatten Array

function flatten(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const flattened = flatten(arr[i]);
            for (let j = 0; j < flattened.length; j++) {
                // result[result.length] = flattened[j];
                result.push(flattened[j]);
            }
        } else {
            // result[result.length] = arr[i];
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(flatten([1, 2, 3]));
console.log(flatten([1, [2, 3]]));
console.log(flatten([[1, 2], [3, 4]]));
console.log(flatten([1, [2, [3, [4, [5]]]]]));