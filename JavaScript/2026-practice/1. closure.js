function counter1() {
    let count = 0;
    return function () {
        return count++;
    };
}

const count1 = counter1();
console.log(count1());
console.log(count1());
console.log(count1());

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