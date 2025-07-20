// Promise.all Polyfill using async and await
function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    let results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const res = await item;
        results[index] = res;

        unresolved -= 1;
        if (unresolved === 0) {
          resolve(results);
        }
      } catch (err) {
        reject(err);
        return;
      }
    });
  });
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 Success"), 3000);
});

// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("P4 Fails"), 2000);
// });

promiseAll([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
