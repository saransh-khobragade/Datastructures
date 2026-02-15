// Classes

// 1. Basic Class with Constructor and Instance Variables
class Person {
    constructor(name, age = 36) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// 2. Class with Class Variables and Static Methods
class Employee {
    // Class variable (shared across all instances)
    static company = "TechCorp";
    static employeeCount = 0;

    constructor(name, age = 30) {
        this.name = name;
        this.age = age;
        Employee.employeeCount++;
    }

    introduce() {
        console.log(`Hello, I'm ${this.name}, working at ${Employee.company}`);
    }

    static getCompanyInfo() {
        return `Company: ${Employee.company}, Total Employees: ${Employee.employeeCount}`;
    }
}

// 3. Class with Private Variables and Methods
class BankAccount {
    #balance;
    #accountNumber;

    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder;
        this.#balance = initialBalance;
        this.#accountNumber = this.#generateAccountNumber();
    }

    #generateAccountNumber() {
        return "ACC" + Math.floor(10000 + Math.random() * 90000);
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log("Invalid deposit amount");
        }
    }

    getBalance() {
        return this.#balance;
    }

    introduce() {
        console.log(`Account holder: ${this.accountHolder}, Balance: $${this.#balance}`);
    }
}

// 4. Class with Inheritance
class Student extends Person {
    constructor(name, age, grade, studentId) {
        super(name, age); // Call parent constructor
        this.grade = grade;
        this.studentId = studentId;
    }

    introduce() {
        console.log(`Hello, I'm ${this.name}, a student with ID ${this.studentId} and grade ${this.grade}`);
    }

    study() {
        console.log(`${this.name} is studying hard!`);
    }
}

// 5. Class with Property-like behavior
class Temperature {
    #celsius;

    constructor(celsius) {
        this.celsius = celsius; // Using setter
    }

    get celsius() {
        return this.#celsius;
    }

    set celsius(value) {
        if (value < -273.15) { // Absolute zero
            throw new Error("Temperature cannot be below absolute zero");
        }
        this.#celsius = value;
    }

    get fahrenheit() {
        return (this.#celsius * 9 / 5) + 32;
    }
}

// Testing all classes
console.log("=== Testing Basic Person Class ===");
const person1 = new Person("John", 36);
person1.introduce();

console.log("\n=== Testing Employee Class ===");
const emp1 = new Employee("Alice", 28);
const emp2 = new Employee("Bob", 32);
emp1.introduce();
emp2.introduce();
console.log(Employee.getCompanyInfo());

console.log("\n=== Testing BankAccount Class ===");
const account = new BankAccount("John Doe", 1000);
account.deposit(500);
account.introduce();
console.log(`Current balance: $${account.getBalance()}`);

console.log("\n=== Testing Student Class (Inheritance) ===");
const student = new Student("Jane", 20, "A", "STU123");
student.introduce();
student.study();

console.log("\n=== Testing Temperature Class (Properties) ===");
const temp = new Temperature(25);
console.log(`Celsius: ${temp.celsius}°C`);
console.log(`Fahrenheit: ${temp.fahrenheit}°F`);
temp.celsius = 30; // Using setter
console.log(`New Celsius: ${temp.celsius}°C`); 