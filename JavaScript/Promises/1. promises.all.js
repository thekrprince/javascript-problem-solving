// Promise.all function - It takes an iterable (usually, an array of promises) and returns a new promise.
// The new promise resolves when all listed promises are resolved, and the array of their results becomes its result.
// For instance, the Promise.all below settles after 3 seconds, and then its result is an array [ 'Promise 1 Success', 'Promise 2 Success', 'Promise 3 Success' ]

/******* Promise.all success example ******/
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 Success"), 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 2 Success"), 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3 Success"), 2000);
});

Promise.all([promise1, promise2, promise3]).then((res) => console.log(res));
// Output wil be [ 'Promise 1 Success', 'Promise 2 Success', 'Promise 3 Success' ] after 3 seconds.

/******* Promise.all error example ******/
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P 1 Success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 2 Success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 3 fail"), 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
// Output wil be Promise 3 fail after 2 seconds coz when any of the promises is rejected,
// the promise returned by Promise.all immediately rejects with that error.
