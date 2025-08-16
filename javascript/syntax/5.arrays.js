// Arrays
let arr = ["apple", "banana", "cherry", "berry", "carry"];

console.log(arr[0]); // apple

// Length
console.log(arr.length); // 5

// Add item
arr.push("pineapple");
console.log(arr); // ['apple', 'banana', 'cherry', 'berry', 'carry', 'pineapple']

// Insert at index
arr.splice(2, 0, "potatoe");
console.log(arr); // ['apple', 'banana', 'potatoe', 'cherry', 'berry', 'carry', 'pineapple']

// Extend/merge
const arr2 = ["kiwi", "orange"];
arr.push(...arr2);
console.log(arr);
// ['apple', 'banana', 'potatoe', 'cherry', 'berry', 'carry', 'pineapple', 'kiwi', 'orange']

// Remove item
const appleIndex = arr.indexOf("apple");
if (appleIndex > -1) {
    arr.splice(appleIndex, 1);
}
console.log(arr);
// ['banana', 'potatoe', 'cherry', 'berry', 'carry', 'pineapple', 'kiwi', 'orange']

// Remove at index
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

// Slicing (start-included : end-excluded)
console.log(sliceArr.slice(0, 1)); // ['apple']
console.log(sliceArr.slice(1, 2)); // ['banana']

// slicing (start-included : n)
console.log(sliceArr.slice(1)); // ['banana', 'cherry', 'berry', 'carry']

// slicing (0: end-excluded)
console.log(sliceArr.slice(0, 2)); // ['apple', 'banana']

// slicing-reverse (0: end-included)
console.log(sliceArr.slice(0, -1)); // ['apple', 'banana', 'cherry', 'berry']

// slicing-reverse (start-excluded : end-included)
console.log(sliceArr.slice(-3, -1)); // ['cherry', 'berry'] 