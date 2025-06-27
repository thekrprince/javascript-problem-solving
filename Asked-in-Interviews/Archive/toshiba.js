// Program 1
/*
var x = 3;
var y = 4;
let demo = () => {
    let ex = () => {
        let x = 2;
        let y = 1;
        y++;
        x--;
        return add(x,y);
    };
    return ex();
}

let add = (x,y) => {
    return window.x + window.y;
};

console.log(demo()); */


// Program 2
/*
var x = 1;

function func(){
    let x = 0;
    for(var i=0; i<4; i++) {
        x += 2;
        return fun(x);
    }
}

function fun(x){
    let y = x+1;
    if(y!=2) {
        return x++;
    }
}

console.log(func()); */


// Program 3
/*
var obj = {
    x: "x",
    func: function() {
        var self = this;
        console.log(this);
        console.log("Outer " + this.x);
        console.log(self.x);
        (function() {
            console.log(this.x);
            console.log("inner " + self.x);
        }());
    }
};

obj.func(); */


// Program 4
/*
async function myFunction() {
    let a,b;
    var x=10;
    var y=5;
    let promise = new Promise((resolve, reject) => {
        a = setTimeout(() => resolve(x+y), 5000);
        b = setTimeout(() => resolve(x-y), 3000);
    });
    clearTimeout(a);
    let result = await promise;
    console.log(result);
}

myFunction(); */


// Program 5
/*
function ex() {
    return {
        x: 3
    };
}

function dem() {
    return {
        y: 2
    };
}

console.log(typeof(ex()), typeof(dem())); */


// Program 6
/*
var x = y = 1;
var z = function() {
    let x=y=z=2;
    return foo(x,y,z);
}

var foo = function(a,b,c) {
    a = b;
    b = c;
    c = a;
    return a + b + c;
}
console.log(z()); */


// Program 7
/*
(function(a) {
    return (function(b) {
        console.log(a);
    })(2)
})(1); */


// Program 8

var a = 0;
var b = function(y) {
    var z = a + y;
    function c(x) {
        x = a + x;
        return x;
    }
    return c(z);
}
var f = function() {
    var a = 10;
    console.log(b(a));
}
f();

function mul(a) {
    return function(b) {
        return function(c) {
            return a*b*c;
        }
    }
}

console.log(mul(2)(3)(4));