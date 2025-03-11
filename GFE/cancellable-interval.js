function setCancellableInterval(callback, delay, ...args) {
  let timer = setInterval(callback, delay, ...args);

  return () => clearInterval(timer);
}

let i = 0;

const cancel = setCancellableInterval(() => {
  i++;
  console.log(i);
}, 200);

// Cancelling it with setTimeout so that can see the i value increasing
setTimeout(cancel, 3000);
