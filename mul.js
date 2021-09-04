let mul = function(a) {
    return function(b) {
        if(b) {
            return mul(a*b);
        }
        return a;
    }
}

console.log(mul(2)(3)(4)());