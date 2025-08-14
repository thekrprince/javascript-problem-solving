
function objectMap(obj, fn) {
    let res = {};

    for (let key in obj) {
        res[key] = fn.call(obj, obj[key]);
    }

    return res;
}

const double = (x) => x * 2;
const res = objectMap({ foo: 1, bar: 2 }, double);
console.log(res);