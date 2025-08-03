let arr = ["apple", "banana", "cherry", "berry", "carry"];

console.log(arr[0]);   // apple

// Length
console.log(arr.length); // 5

// Add item
arr.push("pineapple");
console.log(arr); // ['apple', 'banana', 'cherry', 'berry', 'carry', 'pineapple']

// Insert at index
arr.splice(2, 0, "potatoe");
console.log(arr);  // ['apple', 'banana', 'potatoe', 'cherry', 'berry', 'carry', 'pineapple']

// Extend/merge
let arr2 = ["kiwi", "orange"];
arr = arr.concat(arr2);
console.log(arr); // ['apple', 'banana', 'potatoe', 'cherry', 'berry', 'carry', 'pineapple', 'kiwi', 'orange']

// Remove
arr = arr.filter(item => item !== "apple");
console.log(arr);  // ['banana', 'potatoe', 'cherry', 'berry', 'carry', 'pineapple', 'kiwi', 'orange']

// Remove at index
arr.splice(0, 1);
console.log(arr);  // ['potatoe', 'cherry', 'berry', 'carry', 'pineapple', 'kiwi', 'orange']

// Sort list
arr.sort();
console.log(arr); // ['berry', 'carry', 'cherry', 'kiwi', 'orange', 'pineapple', 'potatoe']
arr.sort((a, b) => b.localeCompare(a));
console.log(arr); // ['potatoe', 'pineapple', 'orange', 'kiwi', 'cherry', 'carry', 'berry']

// Reverse
arr.reverse();
console.log(arr); // ['berry', 'carry', 'cherry', 'kiwi', 'orange', 'pineapple', 'potatoe']

// Dynamic Array
arr = new Array(5).fill(1);
console.log(arr); 