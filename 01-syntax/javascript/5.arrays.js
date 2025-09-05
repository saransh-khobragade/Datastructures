// Arrays
let arr = ["apple", "banana", "cherry", "berry", "carry"];

console.log(arr[0]); // apple

// Length
console.log(arr.length); // 5

// Add item, adds to the end
arr.push("pineapple");
console.log(arr); // ['apple', 'banana', 'cherry', 'berry', 'carry', 'pineapple']

// Insert at index, adds "potatoe" at index 2 , changes original array
arr.splice(2, 0, "potatoe");
console.log(arr); // ['apple', 'banana', 'potatoe', 'cherry', 'berry', 'carry', 'pineapple']

// Extend/merge, spread operator
const arr2 = ["kiwi", "orange"];
arr.push(...arr2);
console.log(arr);
// ['apple', 'banana', 'potatoe', 'cherry', 'berry', 'carry', 'pineapple', 'kiwi', 'orange']

// Find index, returns -1 if not found
console.log(arr.indexOf("cherry")); // 3

// Check existence, returns boolean
console.log(arr.includes("banana")); // true

// find item, returns first match item
console.log(arr.find(element => element.startsWith("b"))); // banana

// Remove item, returns removed item
const appleIndex = arr.indexOf("apple");
if (appleIndex > -1) {
    arr.splice(appleIndex, 1);
}
console.log(arr);
// ['banana', 'potatoe', 'cherry', 'berry', 'carry', 'pineapple', 'kiwi', 'orange']

// Remove at index, removes 1 item at index 0, returns removed item, changes original array
arr.splice(0, 1);
console.log(arr); // ['potatoe', 'cherry', 'berry', 'carry', 'pineapple', 'kiwi', 'orange']

// Sort array
arr.sort();
console.log(arr); // ['berry', 'carry', 'cherry', 'kiwi', 'orange', 'pineapple', 'potatoe']
arr.sort((a, b) => b.localeCompare(a));
console.log(arr); // ['potatoe', 'pineapple', 'orange', 'kiwi', 'cherry', 'carry', 'berry']

// Reverse
arr.reverse();
console.log(arr); // ['berry', 'carry', 'cherry', 'kiwi', 'orange', 'pineapple', 'potatoe']

// Dynamic Array
const dynamicArr = new Array(5).fill(1);
console.log(dynamicArr);

// Map an array
const numArr = [1, 2, 3, 4, 5];
const squaredArr = numArr.map(x => x ** 2);
console.log(squaredArr); // [1, 4, 9, 16, 25]

// Filter an array
const filteredArr = numArr.filter(x => x % 2 === 0);
console.log(filteredArr); // [2, 4]

// Reduce an array
const reducedValue = numArr.reduce((sum, val) => sum + val, 0);
console.log(reducedValue); // 15

// Destructure array
const destructureArr = ["apple", "banana"];
let [a, b] = destructureArr;
console.log(a, b); // apple banana

// Swap
[a, b] = [b, a];
console.log(a, b); // banana apple

// Slices
const sliceArr = ["apple", "banana", "cherry", "berry", "carry"];

// Slicing (start-included : end-excluded), returns new array
console.log(sliceArr.slice(0, 1)); // ['apple']
console.log(sliceArr.slice(1, 2)); // ['banana']

// slicing (start-included : n) , returns new array
console.log(sliceArr.slice(1)); // ['banana', 'cherry', 'berry', 'carry']

// slicing (0: end-excluded) ,returns new array
console.log(sliceArr.slice(0, 2)); // ['apple', 'banana']

// slicing-reverse (0: end-included), returns new array
console.log(sliceArr.slice(0, -1)); // ['apple', 'banana', 'cherry', 'berry']

// slicing-reverse (start-excluded : end-included), returns new array
console.log(sliceArr.slice(-3, -1)); // ['cherry', 'berry'] 