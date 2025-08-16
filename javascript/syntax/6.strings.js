// Strings

// String interpolation
const abc = `Hello ${10}`;
console.log(abc);

// Multi line string
const multiLineString = `
This is a multi line string
This is a multi line string`;
console.log(multiLineString);

// LENGTH OF STRING
const a = "Hello, World!";
console.log(a.length); // 13

// CHECK IN STRING
const txt = "The best things in life are free!";
if (txt.includes("free")) {
    console.log("Yes, 'free' is present.");
}
if (!txt.includes("abc")) {
    console.log("Yes, 'abc' not is present.");
}

// Splitting a string into array
console.log(txt.split(""));
// ['T', 'h', 'e', ' ', 'b', 'e', 's', 't', ' ', 't', 'h', 'i', 'n', 'g', 's', ' ', 'i', 'n', ' ', 'l', 'i', 'f', 'e', ' ', 'a', 'r', 'e', ' ', 'f', 'r', 'e', 'e', '!']

// Joining a list into a string
const arr = ["Hello", "World"];
console.log(arr.join(" ")); // Hello World

// Slicing a string
let str = "Saransh";
console.log(str.charAt(1)); // a from index 1 only one element
console.log(str.charAt(str.length - 2)); // s from last second index only one element
console.log(str.substring(2, 5)); // ran [including:excluding]

// Trimming a string
str = "   Hello, World!   ";
console.log(str.trim()); // "Hello, World!" (removes leading and trailing spaces)
console.log(str.trimStart()); // "Hello, World!   " (removes leading spaces)
console.log(str.trimEnd()); // "   Hello, World!" (removes trailing spaces) 