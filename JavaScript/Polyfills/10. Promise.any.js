// Promise.any polyfill using async/await

function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      reject(new AggregateError([]));
    }

    let aggregatedError = new Array(iterable.length);
    let pending = iterable.length;

    iterable.forEach(async (item, index) => {
      try {
        const val = await item;
        resolve(val);
      } catch (err) {
        aggregatedError[index] = err;
        pending -= 1;
        if (pending === 0) {
          reject(new AggregateError(aggregatedError));
        }
      }
    });
  });
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P3 Fails"), 2000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P4 Fails"), 800);
});

promiseAny([p1, p2, p3, p4])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
