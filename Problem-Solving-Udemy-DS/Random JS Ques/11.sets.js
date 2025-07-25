const s1 = new Set();

s1.add("hey");
s1.add("learn");
s1.add("JS");
s1.add("JS");

console.log(s1);

console.log(s1.has("hi"));
console.log(s1.has("JS"));

console.log(s1.keys());
console.log(s1.values());

console.log(s1.entries((s) => console.log(s)));

console.log(s1.delete("hey"));
console.log(s1);

console.log(s1.size);

s1.clear();
console.log(s1);
