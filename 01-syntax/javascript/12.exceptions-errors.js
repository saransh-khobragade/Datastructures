// Creating custom exceptions and throwing errors

// Custom error classes
class AgeError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AgeError';
    }
}

class InvalidEmailError extends Error {
    constructor(email) {
        super(`Invalid email format: ${email}`);
        this.name = 'InvalidEmailError';
        this.email = email;
    }
}

// Throwing built-in exceptions
function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

// Throwing custom exceptions
function checkAge(age) {
    if (age < 0) {
        throw new AgeError("Age cannot be negative!");
    }
    if (age > 150) {
        throw new AgeError("Age seems unrealistic!");
    }
    return age;
}

function validateEmail(email) {
    if (!email.includes("@")) {
        throw new InvalidEmailError(email);
    }
    return email;
}

// Example usage
try {
    // Test custom exceptions
    checkAge(-5);
} catch (error) {
    if (error instanceof AgeError) {
        console.log(`Age error: ${error.message}`);
    }
}

try {
    validateEmail("invalid-email");
} catch (error) {
    if (error instanceof InvalidEmailError) {
        console.log(`Email error: ${error.message}`);
    }
}

try {
    divideNumbers(10, 0);
} catch (error) {
    console.log(`Division error: ${error.message}`);
} 