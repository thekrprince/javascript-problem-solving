/*
Topic - JSON / Recursion / Important Utilities

Given two objects o1 and o2, check if they are deeply equal.

For two objects to be deeply equal, they must contain the same keys, and the associated values must also be deeply equal. Two objects are also considered deeply equal if they pass the === equality check.

You may assume both objects are the output of JSON.parse. In other words, they are valid JSON.

Please solve it without using lodash's _.isEqual() function.

link -> https://leetcode.com/problems/json-deep-equal/?utm_campaign=PostD17&utm_medium=Post&utm_source=Post&gio_link_id=4PKqJ0z9
*/

var areDeeplyEqual = function (o1, o2) {
  if (Object.keys(o1).length !== Object.keys(o2).length) {
    return false;
  }
  if (typeof o1 !== "object" || typeof o2 !== "object") {
    return false;
  }
  console.log(o1[key]);
  console.log(o2[key]);
  for (let key in o1) {
    if (o1[key] !== o2[key]) {
      return false;
    }
  }
  return true;
};

const obj1 = { x: 1, y: 2 };
const obj2 = { x: 1, y: 2 };
const res = areDeeplyEqual(obj1, obj2);
console.log(res);

const obj3 = {"x":null,"L":[1,2,3]};
const obj4 = {"x":null,"L":["1","2","3"]};
const res2 = areDeeplyEqual(obj3, obj4);
console.log(res2);

const obj5 = true;
const obj6 = false;
const res3 = areDeeplyEqual(obj5, obj6);
console.log(res3);
