function areObjectsEqual(obj1, obj2) {
  const obj1length = Object.keys(obj1).length;
  const obj2length = Object.keys(obj2).length;

  if (obj1length !== obj2length) return false;

  for (let val in obj1) {
    if (typeof obj1[val] === 'object' && typeof obj2[val] === 'object') {
      return areObjectsEqual(obj1[val], obj2[val]);
    } else {
      if (obj1[val] !== obj2[val]) return false;
    }
  }

  return true;
}

const person1 = {
  name: 'Prince',
  age: 26,
  address: {
    city: 'Hajipur',
    village: {
      name: 'Gandhi Ashram',
    },
  },
};

const person2 = {
  name: 'Prince',
  age: 26,
  address: {
    city: 'Hajipur',
    village: {
      name: 'Gandhi Ashram',
    },
  },
};

const result = areObjectsEqual(person1, person2);
console.log(result);
