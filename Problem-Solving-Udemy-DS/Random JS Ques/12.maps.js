const map = new Map();

map.set(1, 100);
map.set(true, "abc");
map.set("hi", "hello");
map.set("hi", "hell");

console.log(map);

console.log(map.has(1));
console.log(map.has("hey"));

console.log(map.get("hi"));

map.delete(1);
console.log(map);
console.log(map.entries());
