// 121, 54445

function palindromeNumber(number) {
  var num = number;
  var rev = 0;

  while (num > 0) {
    var mod = num % 10;
    rev = rev * 10 + mod;
    num = Math.floor(num / 10);
  }

  if (number === rev) {
    return `${number} is a palindrome number`;
  } else {
    return `${number} is not a palindrome number`;
  }
}

var res = palindromeNumber(54345);
console.log(res);
