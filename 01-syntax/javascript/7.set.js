// Set operations

const a = new Set([1, 2, 3, 4]);
const b = new Set();

// Add values
b.add(4);

// check value exists
console.log(b.has(4)); //true

console.log(b.values()); //[Set Iterator] { 4 }

console.log(b.keys()); //[Set Iterator] { 4, 6 }

// Common elements (intersection)
const intersection = new Set([...a].filter((x) => b.has(x)));
console.log(intersection);

// Difference
const difference = new Set([...a].filter((x) => !b.has(x)));
console.log(difference);

const s1 = new Set([1, 2, 3]); // create set from array
console.log(s1);

const s2 = new Set([1, 2, 3]); // create set from array
console.log(s2);

const s3 = new Set("ABC"); // create set from string
console.log(s3);

// Converting array to set
const s4 = new Set([1, 2, 33, 4]);
console.log(s4);
