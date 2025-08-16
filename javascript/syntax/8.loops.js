// Loops

// While loop
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}
// 0
// 1
// 2

// For loop for elements
const fruits = ["apple", "banana", "cherry"];
for (const x of fruits) {
    console.log("first " + x);
}
// first apple
// first banana
// first cherry

// For loop for index
for (let j = 0; j < fruits.length; j++) {
    console.log(j);
}
// 0
// 1
// 2

// For loop for index and element
fruits.forEach((v, k) => {
    console.log(k, v);
});
// 0 apple
// 1 banana
// 2 cherry

// For loop for range
for (let l = 0; l < 2; l++) {
    console.log(l);
}
// 0
// 1

// For loop for range
for (let m = 2; m < 4; m++) {
    console.log("third " + m);
}
// third 2
// third 3

// For loop for range with step
for (let n = 2; n < 6; n += 2) {
    console.log("fourth " + n);
}
// fourth 2
// fourth 4

// For loop in dictionary/object
const d = {
    name: "John",
    age: "30",
    city: "New York"
};

for (const [key, value] of Object.entries(d)) {
    console.log(key, value);
}
// name John
// age 30
// city New York 