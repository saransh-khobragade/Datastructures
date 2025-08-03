let integer = 12;
let str = "Saransh";
let float = 20.5;
let bool = true;
let nullValue = null;
let [a, b, c] = ["Orange", "Banana", "Cherry"]; //multiple declaration
let list = ["apple", "banana", "cherry"];
let tupple = ["apple", "banana", "cherry"]; // JavaScript doesn't have tuples, using array
let range = Array.from({length: 6}, (_, i) => i);
let dictionary = {"name": "John", "age": 36};
let set = new Set(["apple", "banana", "cherry"]);

console.log(integer); //12
console.log(str); //Saransh
console.log(float); //20.5
console.log(nullValue); //null
console.log(a, b, c); //Orange Banana Cherry
console.log(list); //['apple', 'banana', 'cherry']
console.log(tupple); //['apple', 'banana', 'cherry']
console.log(range); //[0, 1, 2, 3, 4, 5]
console.log(dictionary); //{name: 'John', age: 36}
console.log(set); //Set(3) {'banana', 'apple', 'cherry'} 