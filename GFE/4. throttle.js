// Throttling is a technique used to control how many times we allow a function to be executed over time. 
// When a JavaScript function is said to be throttled with a wait time of X milliseconds, it can only be invoked at most once every X milliseconds. 
// The callback is invoked immediately and cannot be invoked again for the rest of the wait duration.

function throttle(func, wait) {
    let shouldThrottle = false;

    return function (...args) {
        if (shouldThrottle) {
            return;
        }

        shouldThrottle = true;
        setTimeout(() => shouldThrottle = false, wait);

        func.apply(this, args);
    };
}

let i = 0;

function increment() {
    i++;
    console.log("i is", i);
}

const throttledIncrement = throttle(increment, 2000);

setInterval(() => {
    throttledIncrement();
}, 100);