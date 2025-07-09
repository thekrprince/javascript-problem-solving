// Promise.allSettled - Takes iterable and return the result for all the Promises upon settlement of all irrespective of success/reject.

const p1 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P1 success"), 2000);
  setTimeout(() => reject("P1 error"), 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 success"), 3000);
});

const promise = Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
