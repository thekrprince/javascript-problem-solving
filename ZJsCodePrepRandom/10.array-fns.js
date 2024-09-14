let arr1 = [10, 20, 30, 42, 5];

arr1.forEach((a) => a / 2);
console.log(arr1);

const mapRes = arr1.map((a, i, arr) => a * 2);
console.log(mapRes);

const reduceRes = arr1.reduce((acc, a) => acc + a, 0);
console.log(reduceRes);

const someRes = arr1.some((a) => a % 3 === 0);
console.log(someRes);

const everyRes = arr1.every((a) => a % 2 === 0);
console.log(everyRes);

arr1.pop();
console.log(arr1);

arr1.push(67);
console.log(arr1);

arr1.shift(5);
console.log(arr1);

arr1.unshift(100);
console.log(arr1);

const arr2 = arr1.slice(1, 4);
console.log(arr2);

arr1.splice(1, 2);
console.log(arr1);
