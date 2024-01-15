// Search substr and return all the count

function stringSearch(sentence, match) {
  let count = 0;

  for (let i = 0; i < sentence.length; i++) {
    for (let j = 0; j < match.length; j++) {
      if (match[j] !== sentence[i + j]) break;
      if (j === match.length - 1) count++;
    }
  }

  return count;
}

let result = stringSearch('wowomgzomgomgggomg ifgshomghhjhomg', 'omg');
console.log(result);
