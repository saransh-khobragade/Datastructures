let a = 1;
let b = "2";
let c = [1, 2, 3];
let d = new Set([1, 2, 3]);
let e = {"a": "1", "b": "2", "c": "3"};

console.log(typeof a); // number
console.log(typeof b); // string
console.log(Array.isArray(c)); // true
console.log(d instanceof Set); // true
console.log(typeof e); // object 