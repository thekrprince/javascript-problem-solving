// Similar to Promise.race, but waits only for the first fulfilled promise and gets its result.
// If all of the given promises are rejected,
// then the returned promise is rejected with AggregateError – a special error object that stores all promise errors in its errors property.

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 3000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P3 Fails"), 1000);
});

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
// The first promise here was fastest, but it was rejected, so the second promise became the result.
// After the first fulfilled promise “wins the race”, all further results are ignored.

Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Ouch!")), 1000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Error!")), 2000)
  ),
]).catch((error) => {
  console.log(error.constructor.name); // AggregateError
  console.log(error.errors[0]); // Error: Ouch!
  console.log(error.errors[1]); // Error: Error!
});
