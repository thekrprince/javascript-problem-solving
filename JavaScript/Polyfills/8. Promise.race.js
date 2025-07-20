// Promise.race polyfill using async/await

function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      return;
    }

    iterable.forEach(async (item) => {
      try {
        const val = await item;
        resolve(val);
      } catch (err) {
        reject(err);
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
  setTimeout(() => reject("P4 Fails"), 800);
});

promiseRace([p1, p2, p3, p4])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
