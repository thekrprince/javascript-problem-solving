function counter(defaultVal = 0) {
    let sum = defaultVal;
    return function () {
        sum = sum + 1;
        return sum;
    };
}

let count = counter();
console.log(count());
console.log(count());