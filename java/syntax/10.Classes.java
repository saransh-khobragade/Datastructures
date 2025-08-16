// Classes
import java.util.Random;

public class Classes {
    // 1. Basic Class with Constructor and Instance Variables
    static class Person {
        private String name;
        private int age;

        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }

        public Person(String name) {
            this(name, 36);
        }

        public void introduce() {
            System.out.printf("Hello, my name is %s and I am %d years old.%n", name, age);
        }
    }

    // 2. Class with Class Variables and Static Methods
    static class Employee {
        // Class variable (shared across all instances)
        private static String company = "TechCorp";
        private static int employeeCount = 0;
        private String name;
        private int age;

        public Employee(String name, int age) {
            this.name = name;
            this.age = age;
            employeeCount++;
        }

        public void introduce() {
            System.out.printf("Hello, I'm %s, working at %s%n", name, company);
        }

        public static String getCompanyInfo() {
            return String.format("Company: %s, Total Employees: %d", company, employeeCount);
        }
    }

    // 3. Class with Private Variables and Methods
    static class BankAccount {
        private String accountHolder;
        private double balance;
        private String accountNumber;

        public BankAccount(String accountHolder, double initialBalance) {
            this.accountHolder = accountHolder;
            this.balance = initialBalance;
            this.accountNumber = generateAccountNumber();
        }

        private String generateAccountNumber() {
            Random random = new Random();
            return "ACC" + (10000 + random.nextInt(90000));
        }

        public void deposit(double amount) {
            if (amount > 0) {
                balance += amount;
                System.out.printf("Deposited $%.2f. New balance: $%.2f%n", amount, balance);
            } else {
                System.out.println("Invalid deposit amount");
            }
        }

        public double getBalance() {
            return balance;
        }

        public void introduce() {
            System.out.printf("Account holder: %s, Balance: $%.2f%n", accountHolder, balance);
        }
    }

    // 4. Class with Inheritance
    static class Student extends Person {
        private String grade;
        private String studentId;

        public Student(String name, int age, String grade, String studentId) {
            super(name, age);
            this.grade = grade;
            this.studentId = studentId;
        }

        @Override
        public void introduce() {
            System.out.printf("Hello, I'm %s, a student with ID %s and grade %s%n", 
                name, studentId, grade);
        }

        public void study() {
            System.out.printf("%s is studying hard!%n", name);
        }
    }

    // 5. Class with Property-like behavior
    static class Temperature {
        private double celsius;

        public Temperature(double celsius) {
            setCelsius(celsius);
        }

        public double getCelsius() {
            return celsius;
        }

        public void setCelsius(double value) {
            if (value < -273.15) { // Absolute zero
                throw new IllegalArgumentException("Temperature cannot be below absolute zero");
            }
            this.celsius = value;
        }

        public double getFahrenheit() {
            return (celsius * 9 / 5) + 32;
        }
    }

    public static void main(String[] args) {
        System.out.println("=== Testing Basic Person Class ===");
        Person person1 = new Person("John", 36);
        person1.introduce();

        System.out.println("\n=== Testing Employee Class ===");
        Employee emp1 = new Employee("Alice", 28);
        Employee emp2 = new Employee("Bob", 32);
        emp1.introduce();
        emp2.introduce();
        System.out.println(Employee.getCompanyInfo());

        System.out.println("\n=== Testing BankAccount Class ===");
        BankAccount account = new BankAccount("John Doe", 1000);
        account.deposit(500);
        account.introduce();
        System.out.printf("Current balance: $%.2f%n", account.getBalance());

        System.out.println("\n=== Testing Student Class (Inheritance) ===");
        Student student = new Student("Jane", 20, "A", "STU123");
        student.introduce();
        student.study();

        System.out.println("\n=== Testing Temperature Class (Properties) ===");
        Temperature temp = new Temperature(25);
        System.out.printf("Celsius: %.1f°C%n", temp.getCelsius());
        System.out.printf("Fahrenheit: %.1f°F%n", temp.getFahrenheit());
        temp.setCelsius(30); // Using setter
        System.out.printf("New Celsius: %.1f°C%n", temp.getCelsius());
    }
} 