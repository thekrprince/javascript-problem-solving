// Promises function

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
