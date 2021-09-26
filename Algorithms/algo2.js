// Write a function which takes in a string and returns counts of each character in the string.
// "hello" -> o/p {h:1, e:1, l:2, o:1}
// "Your PIN number is 1234!" -> o/p {1:1, 2:1, 3:1, 4:1, b:1, e:1, i:2, m:1, n:2, o:1, p:1, r:2, s:1, u:2, y:1}

// ============================== Method 1 ===================================
function charCount(str) {
  // make object to return at end
  var result = {};
  // loop over string, for each character
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (result[char] > 0) {
      // if the char is a number/letter AND is a key in object, add one to count
      result[char]++;
    } else {
      // if the char is a number/letter AND not in object, add it to object and set value to 1
      result[char] = 1;
    }
  }
  // if char is something else (space, period, etc.) don't do anything
  // return object at end
  return result;
}
// ============================== Method 1 end ===================================

// ============================== Method 2 ===================================

function charCount1(str) {
  var obj = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }

  return obj;
}

// ============================== Method 2 end ===================================

// ============================== Method 3 ===================================

function charCount2(str) {
  var obj = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (checkAscii(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function checkAscii(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 65 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

// // ============================== Method 3 end ===================================

var res = charCount2('Hi There!! Whats up? Call me on 9113451425');
console.log(res);
