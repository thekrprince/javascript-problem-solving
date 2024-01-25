function reverseStrings(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverseStrings(str.slice(1)) + str[0];
}

var res = reverseStrings("JavaScript");
console.log(res);
