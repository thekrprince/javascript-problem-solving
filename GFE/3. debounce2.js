// Link - https://www.greatfrontend.com/questions/javascript/debounce-ii?practice=practice&tab=coding

// Advance version of debounce with 2 extra methods
// cancel() method to cancel pending invocations
// flush() method to immediately invoke any delayed invocations

function debounce(fn, wait) {
    let timeoutId = null;
    let context = undefined;
    let argsToInvoke = undefined;

    function clearTimer() {
        clearTimeout(timeoutId);
        timeoutId = null;
    }

    function invoke() {
        if (timeoutId === null) {
            return;
        }
        clearTimer();

        fn.apply(context, argsToInvoke);
    }

    function fun(...args) {
        clearTimer();
        context = this;
        argsToInvoke = args;

        timeoutId = setTimeout(() => invoke(), wait);
    }

    fun.cancel = clearTimer;
    fun.flush = invoke;
    return fun;
}

let i = 0;
function increment() {
    i++;
    console.log("i is:", i);
}

const debouncedIncrement = debounce(increment, 3000); // i = 0;

debouncedIncrement(); // will output nothing as below cancel will run and clear the timer
debouncedIncrement.cancel();
debouncedIncrement.flush(); // No Output, as above cancel already cleared the timer
debouncedIncrement(); // will be canceled
debouncedIncrement(); // 1 after 3 seconds but if below flush is called then 1 will be printed immediately
// debouncedIncrement.flush();