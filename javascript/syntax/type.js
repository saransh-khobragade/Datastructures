let a = 1;
let b = "2";
let c = [1, 2, 3];
let d = new Set([1, 2, 3]);
let e = {"a": "1", "b": "2", "c": "3"};

console.log(typeof a); //number
console.log(typeof b); //string
console.log(Array.isArray(c) ? 'array' : typeof c); //array
console.log(d instanceof Set ? 'set' : typeof d); //set
console.log(typeof e); //object 