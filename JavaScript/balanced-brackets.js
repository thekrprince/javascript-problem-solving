function balancedBrackets(brackets) {
  const openingBrackets = ['[', '{', '('];
  const closingBrackets = [']', '}', ')'];

  if (brackets.length % 2 !== 0) return false;

  let j = brackets.length - 1;

  for (let i = 0; i < brackets.length / 2; i++) {
    const checkOpen = openingBrackets.findIndex(
      (o) => brackets.charAt(i) === o
    );
    const checkClose = closingBrackets.findIndex(
      (o) => brackets.charAt(j) === o
    );

    if (checkOpen !== checkClose) return false;

    j--;
  }

  return true;
}

const result = balancedBrackets('[{({([])})}]');
console.log(result);
