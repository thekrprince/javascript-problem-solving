Array.prototype.mapPolyfill = function (callbackFn) {
    let res = [];
    for(let i=0; i < this.length; i++) {
        res.push(callbackFn(this[i], i, this))
    }
    return res;
}

let arr = [11, 22, 33, 44, 55];

const modifiedArr = arr.mapPolyfill(a => a * 2);
console.log(modifiedArr);
