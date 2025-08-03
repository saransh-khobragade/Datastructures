let arr = ["apple", "banana", "cherry", "berry", "carry"];

//Slicing (start-included : end-excluded)
console.log(arr.slice(0, 1)); //['apple']
console.log(arr.slice(1, 2)); //['banana']

//slicing (start-included : n)
console.log(arr.slice(1));  //['banana', 'cherry', 'berry', 'carry']

//slicing (0: end-excluded)
console.log(arr.slice(0, 2));  //['apple', 'banana']

//slicing-reverse (0: end-included)
console.log(arr.slice(0, -1));  //['apple', 'banana', 'cherry', 'berry']

//slicing-reverse (start-excluded : end-included)
console.log(arr.slice(-3, -1));  //['cherry', 'berry'] 