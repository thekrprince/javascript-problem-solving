function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      return i;
    }
  }
  return -1;
}

const res = linearSearch(['Bengaluru', 'Coorg', 'Udupi', 'Mysore'], 'Coorg');
console.log(res);
