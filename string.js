// Program - Replace string with their count in alphabet with three consecutive number
/*
var a = "PRINCE";
var name = a.split('');
console.log(name);
var b = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'x', 'Y', 'Z'];
var res = [];

for(let i=0; i<name.length; i++) {
    for(let j=1; j<=b.length; j++) {
        if(name[i]===b[j]) {
            res.push(j+1, j+2, j+3);
        }
    }
}

console.log(res); */

// Program - Remove three consecutive duplicates from string

var input = "aabbbaccddddc"
var arr = [];

for(let i=0; i<input.length; i++) {
    var count = 0;
    for(let j=i; j<i+3; j++) {
        if(input.charAt(i) === input.charAt(j)) {
            count++;
            arr.push(input.charAt(j));
            if(count===3) {
                arr.pop();
                arr.pop();
                arr.pop();
            }
        }
    }
}

console.log(arr);