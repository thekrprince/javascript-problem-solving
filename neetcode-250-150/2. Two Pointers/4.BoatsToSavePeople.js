// Boats to Save People

function numRescueBoats(people, limit) {
  people.sort((a, b) => a - b);

  let l = 0,
    r = people.length - 1;
  let boatRequired = 0;

  while (l < r) {
    if (people[l] + people[r] <= limit) {
      boatRequired++;
      l++;
      r--;
    } else {
      boatRequired++;
      r--;
    }
  }

  if (l === r) {
    boatRequired++;
  }

  return boatRequired;
}

console.log(numRescueBoats([1, 2], 3));
console.log(numRescueBoats([3, 2, 2, 1], 3));
console.log(numRescueBoats([3, 5, 3, 4], 5));
console.log(numRescueBoats([5, 1, 4, 2], 6));
