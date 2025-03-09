/*
Custom Sleep Function
*/

async function sleep(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

async function greeting() {
  await sleep(2000);
  console.log("Hello");
}

greeting();
let timer = setInterval(() => console.log("Tick"), 500);
sleep(5000).then(() => clearInterval(timer));
console.log("This code works.");
