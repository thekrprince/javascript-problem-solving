// Promise.allSettled - Takes iterable and return the result for all the Promises upon settlement of all irrespective of the result.
//  The resulting array has: {status:"fulfilled", value:result} for successful responses, and {status:"rejected", reason:error} for errors.

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

/*
  O/P:
  [
    { status: 'rejected', reason: 'P1 error' },
    { status: 'fulfilled', value: 'P1 success' },
    { status: 'fulfilled', value: 'P1 success' }
  ]
*/
