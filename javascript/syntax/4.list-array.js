let arr = ["apple", "banana", "cherry", "berry", "carry"];

console.log(arr[0]);  // apple

// Length
console.log(arr.length);  // 5

// Add item
arr.push("pineapple");
console.log(arr);  // ['apple', 'banana', 'cherry', 'berry', 'carry', 'pineapple']

// Insert at index
arr.splice(2, 0, "potatoe");
console.log(arr);  // ['apple', 'banana', 'potatoe', 'cherry', 'berry', 'carry', 'pineapple']

// Extend/merge
let arr2 = ["kiwi", "orange"];
arr.push(...arr2);
console.log(
    arr
);  // ['apple', 'banana', 'potatoe', 'cherry', 'berry', 'carry', 'pineapple', 'kiwi', 'orange']

// Remove
arr.splice(arr.indexOf("apple"), 1);
console.log(
    arr
);  // ['banana', 'potatoe', 'cherry', 'berry', 'carry', 'pineapple', 'kiwi', 'orange']

// Remove at index
arr.splice(0, 1);
console.log(arr);  // ['potatoe', 'cherry', 'berry', 'carry', 'pineapple', 'kiwi', 'orange']

// Sort list
arr.sort();
console.log(arr);  // ['berry', 'carry', 'cherry', 'kiwi', 'orange', 'pineapple', 'potatoe']
arr.sort((a, b) => b.localeCompare(a));
console.log(arr);  // ['potatoe', 'pineapple', 'orange', 'kiwi', 'cherry', 'carry', 'berry']

// Reverse
arr.reverse();
console.log(arr);  // ['berry', 'carry', 'cherry', 'kiwi', 'orange', 'pineapple', 'potatoe']

// Dynamic Array
arr = new Array(5).fill(1);
console.log(arr);

// map an array
arr = [1, 2, 3, 4, 5];
let squared_arr = arr.map(x => x ** 2);
console.log(squared_arr);  // [1, 4, 9, 16, 25]
squared_arr = arr.map(x => x ** 2);
console.log(squared_arr);  // [1, 4, 9, 16, 25]

// filter an array
let filtered_arr = arr.filter(x => x % 2 === 0);
console.log(filtered_arr);  // [2, 4]
filtered_arr = arr.filter(x => x % 2 === 0);
console.log(filtered_arr);  // [2, 4]

// reduce an array
let reduced_value = arr.reduce((x, y) => x + y, 0);
console.log(reduced_value);  // 15
// Array comprehension equivalent (using map)
squared_arr = arr.map(x => x ** 2);
console.log(squared_arr);  // [1, 4, 9, 16, 25] 