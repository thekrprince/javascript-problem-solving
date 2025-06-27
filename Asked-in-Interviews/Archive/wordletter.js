//Print the words who has more than 6 letters

const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

for (let i = 0; i < words.length; i++) {
  if (words[i].length > 6) {
    console.log(words[i]);
  }
}

// Set Timeout find o/p

for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i * i);
  }, 3000);
}
