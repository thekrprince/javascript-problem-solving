// Polyfill of Promise.all

function promiseAll(iterable) {
    return new Promise((resolve, reject) => {
        let res = new Array(iterable.length);
        let unresolved = iterable.length;

        if (unresolved === 0) {
            resolve(res);
            return;
        }

        iterable.forEach(async (item, index) => {
            try {
                const r = await item;
                res[index] = r;

                unresolved--;

                if (unresolved === 0) {
                    resolve(res);
                }
            } catch (error) {
                reject(error);
            }
        });
    });
}

const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 100);
});

// Resolved examples
// Way 1
const res = await promiseAll([p0, p1, p2]); // [3, 42, 'foo']
console.log(res);
// Way 2
promiseAll([p0, p1, p2]).then((res) => console.log(res)).catch(err => console.log(err)); // [3, 42, 'foo']

// Rejection example.
const p3 = Promise.resolve(30);
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('An error occurred!');
    }, 100);
});

promiseAll([p3, p4]).then((res) => console.log(res)).catch(err => console.log(err)); // An error occurred
