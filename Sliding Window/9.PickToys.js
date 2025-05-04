function pickToys(toys, k) {
  let i = 0;
  let j = 0;

  let maxToysPicked = 0;
  let map = {};

  while (j < toys.length) {
    const toy = toys[j];
    map[toy] = (map[toy] || 0) + 1;

    const sizeOfMap = Object.keys(map).length;
    if (sizeOfMap < k) {
      j++;
    } else if (sizeOfMap === k) {
      maxToysPicked = Math.max(maxToysPicked, j - i + 1);
      j++;
    } else {
      while (Object.keys(map).length > k) {
        const leftToy = toys[i];
        map[leftToy]--;

        if (map[leftToy] === 0) {
          delete map[leftToy];
        }

        i++;
      }

      j++;
    }
  }

  return maxToysPicked;
}

console.log(pickToys("abaccab", 2));
