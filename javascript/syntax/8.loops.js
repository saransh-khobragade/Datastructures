let fruits = ["apple", "banana", "cherry"];
for (let x of fruits) {
    console.log("first " + x);
}
// first apple
// first banana
// first cherry

for (let x = 0; x < fruits.length; x++) {
    console.log(x);
}
// 0
// 1
// 2

for (let x = 0; x < 2; x++) {
    console.log(x);
}
// 0
// 1

for (let x = 2; x <= 3; x++) {
    console.log("third " + x);
}
// third 2
// third 3

for (let x = 2; x < 6; x += 2) {
    console.log("fourth " + x);
}
// fourth 2
// fourth 4

let d = {"name": "John", "age": 30, "city": "New York"};
// loop in dictionary/object
for (let [x, y] of Object.entries(d)) {
    console.log(x, y);
}
// name John
// age 30
// city New York 