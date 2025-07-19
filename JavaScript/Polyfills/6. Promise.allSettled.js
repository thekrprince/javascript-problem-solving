// Promise.allSettled polyfill using async/await

function promiseAllSettled(iterable) {
  return new Promise((resolve, reject) => {
    let results = new Array(iterable.length);
    let pending = iterable.length;

    if (pending === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        let val = await item;
        results[index] = { status: "fulfilled", value: val };
      } catch (err) {
        results[index] = { status: "rejected", reason: err };
        if (pending.length === 0) {
          resolve(results);
        }
      }

      pending -= 1;
      if (pending === 0) {
        resolve(results);
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

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P4 Fails"), 2000);
});

promiseAllSettled([p1, p2, p3, p4])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
