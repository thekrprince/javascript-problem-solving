function productOfArray(arr) {
  let product = 0;

  if (arr.length === 0) return 1;

  product = arr[0] * productOfArray(arr.slice(1));

  return product;
}

var res = productOfArray([3, 2, 5]);
console.log(res);
