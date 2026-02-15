// Set operations

const a = new Set([1, 2, 3, 4]);
const b = new Set([4, 5]);

// Add values
b.add(6);

// check value exists
console.log(b.has(4)); //true

// All values
console.log(b.values()); //[Set Iterator] { 4, 5, 6 }

//Remove value
a.delete(1); //return true
console.log(a); //Set(3) { 2, 3, 4 }

// Intersection
console.log(a.intersection(b)); //Set(1) { 4 }

// Difference
console.log(b.difference(a)); //Set(2) { 5, 6 }

const s1 = new Set([1, 2, 3]); // create set from array
console.log(s1); //Set(3) { 1, 2, 3 }
