// Input handling

// Example 1: Reading two space-separated integers
function readTwoIntegers() {
    try {
        const input = prompt("Enter two integers (space-separated): ");
        const parts = input.split(" ");
        const p = parseInt(parts[0]);
        const c = parseInt(parts[1]);
        if (!isNaN(p) && !isNaN(c)) {
            console.log(`p = ${p}, c = ${c}`);
        } else {
            throw new Error("Invalid input");
        }
    } catch (error) {
        console.log("Error: Please enter two space-separated integers");
    }
}

// Example 2: Reading space-separated integers into an array
function readIntegersArray() {
    try {
        const input = prompt("Enter space-separated integers: ");
        const num = input.split(" ").map(x => parseInt(x));
        if (num.every(x => !isNaN(x))) {
            console.log(`Array of integers: ${num}`);
        } else {
            throw new Error("Invalid input");
        }
    } catch (error) {
        console.log("Error: Please enter space-separated integers only");
    }
}

// Example 3: Reading a string and converting to array of characters
function readStringToChars() {
    const exp = prompt("Enter a string: ");
    const charList = exp.split("");
    console.log(`Array of characters: ${charList}`);
}

// Example 4: Reading a single integer
function readSingleInteger() {
    try {
        const input = prompt("Enter a single integer: ");
        const singleNum = parseInt(input);
        if (!isNaN(singleNum)) {
            console.log(`Single integer: ${singleNum}`);
        } else {
            throw new Error("Invalid input");
        }
    } catch (error) {
        console.log("Error: Please enter a valid integer");
    }
}

// Test the functions
// readTwoIntegers();
// readIntegersArray();
// readStringToChars();
// readSingleInteger(); 