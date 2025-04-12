let s = ["H", "E", "L", "L", "O"];

let left = 0,
  right = s.length - 1;

while (left < right) {
  [s[left], s[right]] = [s[right], s[left]];

  left++;
  right--;
}

console.log(s);
