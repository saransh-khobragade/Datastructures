// Operators
let a = 10;
let b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0 (mod)
console.log(a ** b); // 100000

// Assignment operators
a = 10;
b = 5;
a += b; // a = a + b
console.log(a); // 15
a -= b; // a = a - b
console.log(a); // 10
a *= b; // a = a * b
console.log(a); // 50
a /= b; // a = a / b
console.log(a); // 10

// Comparison operators
a = 10;
b = 5;
console.log(a === b); // false
console.log(a !== b); // true
console.log(a > b); // true
console.log(a < b); // false
console.log(a >= b); // true
console.log(a <= b); // false

// Logical operators
const boolA = true;
const boolB = false;
console.log(boolA && boolB); // false
console.log(boolA || boolB); // true
console.log(!boolA); // false

// Identity operators (strict equality)
const numA = 10;
const numB = 5;
console.log(numA === numB); // false
console.log(numA !== numB); // true

// Membership operators (for arrays)
const list = [1, 2, 3, 4, 5];
console.log(list.includes(a)); // false
console.log(!list.includes(a)); // true 