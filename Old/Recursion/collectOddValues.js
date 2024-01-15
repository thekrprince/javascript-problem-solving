// Helper method recursion

function collectOddValues(arr) {
  let oddValues = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      oddValues.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return oddValues;
}

var res = collectOddValues([3, 2, 33, 7, 99, 43, 12, 8]);
console.log(res);
