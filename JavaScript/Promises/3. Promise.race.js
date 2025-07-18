// Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).
// resolve takes only one argument that's why added object in p2 to have the label and data both

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 success"), 1000);
});

let p2 = new Promise((resolve, reject) => {
  fetch("https://dummyjson.com/products/1")
    .then((res) => res.json())
    .then((data) => resolve({ label: "P2 Success", data }))
    .catch((err) => reject({ label: "P2 Fails", err }));
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 success"), 3000);
});

Promise.race([p1, p2, p3])
  .then((res) => console.log("Race Winner:", res))
  .catch((err) => console.error("Race Error:", err));

// The fetch(p2) promise here was fastest, so it became the result.
// After the first settled promise “wins the race”, all further results/errors are ignored.
