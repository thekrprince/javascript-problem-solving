// Reverse a string without affecting special characters.

function reverseAlphnums(s) {
  let left = 0;
  let right = s.length - 1;
  let sArr = s.split("");

  while (left < right) {
    if (!/[a-zA-Z0-9]/.test(sArr[left])) {
      left++;
      continue;
    } else if (!/[a-zA-Z0-9]/.test(sArr[right])) {
      right--;
      continue;
    }
    [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
    left++;
    right--;
  }

  return sArr.join("");
}

const str1 = "  Th!s 9s Bangkok!!!  ";
const str2 = "  P@r@inc#     ";
console.log(reverseAlphnums(str1));
console.log(reverseAlphnums(str2));
