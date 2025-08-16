// Type checking

const a = 1;
const b = "2";
const c = [1, 2, 3];
const d = new Set([1, 2, 3]);
const e = {a: "1", b: "2", c: "3"};

console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // object
console.log(typeof d); // object
console.log(typeof e); // object

// Type checking
if (typeof a === 'number') {
    console.log("a is a number");
}
if (typeof b === 'string') {
    console.log("b is a string");
}

// More specific type checking
if (Array.isArray(c)) {
    console.log("c is an array");
}
if (d instanceof Set) {
    console.log("d is a Set");
}
if (e.constructor === Object) {
    console.log("e is an object");
} 