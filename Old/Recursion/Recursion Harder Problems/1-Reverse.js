// String Reverse

function reverse(str) {
  if (str.length <= 1) return str;

  return reverse(str.slice(1)) + str[0];
}

var res = reverse('bangalore');
console.log(res);
