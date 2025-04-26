function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  let res = capitalizeFirst(arr.slice(0, -1));
  res.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return res;
}

const res = capitalizeFirst(['car', 'taco', 'banana']);
console.log(res);
