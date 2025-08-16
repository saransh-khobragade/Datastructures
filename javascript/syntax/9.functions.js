// Functions

// Function with parameter
function myFunction(fname) {
    console.log(fname + " Refsnes");
}

// Function with multiple parameters
function myFunctionWithParams(fname, lname) {
    console.log(fname + " " + lname);
}

// Function with default parameter
function myFunctionWithDefault(fname, lname = "Refsnes") {
    console.log(fname + " " + lname);
}

// Arrow function with parameter
const myArrowFunction = (fname) => {
    console.log(fname + " Refsnes");
};

// Test the functions
myFunction("John");
myFunctionWithParams("John", "Doe");
myFunctionWithDefault("Jane");
myArrowFunction("Alice"); 