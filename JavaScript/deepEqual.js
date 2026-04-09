// Deep equality involves comparing two objects or arrays to determine if they are structurally identical. 
// Unlike shallow equality, which only checks if object references are the same, deep equality examines whether all nested values are equal.

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (obj1 === null || typeof obj1 !== 'object' || obj2 === null || typeof obj2 !== 'object') return false;

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

const object1 = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        zip: '10001',
    },
};

const object2 = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        zip: '10001',
    },
};

console.log(deepEqual(object1, object2)); // true