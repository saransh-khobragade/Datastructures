// LENGTH OF STRING----------------------------------------
let a = "Hello, World!";
console.log(a.length);  // 13

// CHECK IN STRING----------------------------------------
let txt = "The best things in life are free!";
if (txt.includes("free")) {
    console.log("Yes, 'free' is present.");
}
if (!txt.includes("abc")) {
    console.log("Yes, 'abc' not is present.");
}

// Splitting a string into array----------------------------------------
txt = "Hello, World!";
console.log(Array.from(txt));  // ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']

// Joining a list into a string----------------------------------------
let arr = ["Hello", "World"];
console.log(arr.join(" "));  // Hello World

// Slicing a string----------------------------------------
let str = "Saransh";
console.log(str[1]);  // a from index 1 only one element
console.log(str[str.length - 2]);  // s from last second index only one element
console.log(str.substring(2, 5));  // ran [including:excluding] 