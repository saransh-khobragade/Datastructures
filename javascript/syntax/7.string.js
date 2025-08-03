// LENGTH OF STRING----------------------------------------
let a = "Hello, World!";
console.log(a.length); // 13

// CHECK IN STRING----------------------------------------
let txt = "The best things in life are free!";
if (txt.includes("free")) {
    console.log("Yes, 'free' is present.");
}
if (!txt.includes("abc")) {
    console.log("Yes, 'abc' not is present.");
}

// SLICE----------------------------------------------------
// Saransh
// 0123456

let str = "Saransh";
console.log(str[1]);   // a from index 1 only one element
console.log(str[str.length - 2]);  // s from last second index only one element
console.log(str.substring(2, 5)); // ran [including:excluding]

// sorted()----------------------------------------------------
console.log("abc".split('').sort()); // ['a', 'b', 'c']

// converting list to integers to single string
let arr = [1, 2, 3, 4];
console.log(arr.map(String).join(''));

// getting a string from list
// let w = prompt().split(' ').join(''); 