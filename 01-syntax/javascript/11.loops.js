// Loops

// While loop
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

// For loop for elements
const fruits = ["apple", "banana", "cherry"];
for (const x of fruits) {
    console.log("first " + x);
}

// For loop for index
const fruits2 = ["apple", "banana", "cherry"];
for (const i in fruits) {
    console.log("first " + x);
}
// For loop for index
for (let j = 0; j < fruits.length; j++) {
    console.log(j);
}

// For loop for index and element
for (let [i, v] of fruits.entries()) {
    console.log(i, v);
}

// For loop for index and element
fruits.forEach((v, k) => {
    console.log(k, v);
});

// For loop for range
for (let l = 0; l < 2; l++) {
    console.log(l);
}

// For loop for range
for (let m = 2; m < 4; m++) {
    console.log("third " + m);
}

// For loop for range with step
for (let n = 2; n < 6; n += 2) {
    console.log("fourth " + n);
}

// For loop in dictionary/object
const d = {
    name: "John",
    age: "30",
    city: "New York",
};

for (const [key, value] of Object.entries(d)) {
    console.log(key, value);
}
