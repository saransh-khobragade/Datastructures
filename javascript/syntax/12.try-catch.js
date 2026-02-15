// Try-catch

// Basic try-catch
try {
    const input = prompt("Enter a number: ");
    const number = parseInt(input);
    const result = 10 / number;
    console.log(`Result: ${result}`);
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Please enter a valid number!");
    } else if (error instanceof Error) {
        console.log("Cannot divide by zero!");
    } else {
        console.log(`An error occurred: ${error.message}`);
    }
} finally {
    console.log("This always runs!");
}

// Alternative using async/await for input (Node.js environment)
async function handleInput() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    try {
        const input = await new Promise(resolve => {
            readline.question('Enter a number: ', resolve);
        });
        
        const number = parseInt(input);
        if (isNaN(number)) {
            throw new TypeError("Invalid number");
        }
        
        if (number === 0) {
            throw new Error("Division by zero");
        }
        
        const result = 10 / number;
        console.log(`Result: ${result}`);
    } catch (error) {
        if (error instanceof TypeError) {
            console.log("Please enter a valid number!");
        } else if (error.message === "Division by zero") {
            console.log("Cannot divide by zero!");
        } else {
            console.log(`An error occurred: ${error.message}`);
        }
    } finally {
        console.log("This always runs!");
        readline.close();
    }
}

// Uncomment to run in Node.js environment
// handleInput(); 