// Debouncing is a technique used to control how many times we allow a function to be executed over time.
// When a JavaScript function is debounced with a wait time of X milliseconds, 
// it must wait until after X milliseconds have elapsed since the debounced function was last called.

// Link -> https://www.greatfrontend.com/questions/javascript/debounce?practice=practice&tab=coding

function debounce(func, wait) {
    let timeoutId = null;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            timeoutId = null;
            func.apply(this, args);
        }, wait);
    };
}

// Function increment without args
function increment(i = 0) {
    i++;
    console.log("i is:", i);
}

const debouncedIncrement = debounce(increment, 3000);
debouncedIncrement();
debouncedIncrement();
debouncedIncrement();


// Function search query with args
function searchQuery(query) {
    console.log("Searching:", query);
}

const debouncedSearch = debounce(searchQuery, 2000);
debouncedSearch("app");
debouncedSearch("apple");