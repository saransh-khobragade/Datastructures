import random


# 1. Basic Class with Constructor and Instance Variables
class Person:
    def __init__(self, name, age=36):
        self.name = name
        self.age = age

    def introduce(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")


# 2. Class with Class Variables and Static Methods
class Employee:
    # Class variable (shared across all instances)
    company = "TechCorp"
    employee_count = 0

    def __init__(self, name, age=30):
        self.name = name
        self.age = age
        Employee.employee_count += 1

    def introduce(self):
        print(f"Hello, I'm {self.name}, working at {Employee.company}")

    @staticmethod
    def get_company_info():
        return (
            f"Company: {Employee.company}, Total Employees: {Employee.employee_count}"
        )


# 3. Class with Private Variables and Methods
class BankAccount:
    def __init__(self, account_holder, initial_balance=0):
        self.account_holder = account_holder
        self.__balance = initial_balance  # Private variable
        self.__account_number = self.__generate_account_number()

    def __generate_account_number(self):
        return f"ACC{random.randint(10000, 99999)}"

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Deposited ${amount}. New balance: ${self.__balance}")
        else:
            print("Invalid deposit amount")

    def get_balance(self):
        return self.__balance

    def introduce(self):
        print(f"Account holder: {self.account_holder}, Balance: ${self.__balance}")


# 4. Class with Inheritance
class Student(Person):
    def __init__(self, name, age, grade, student_id):
        super().__init__(name, age)  # Call parent constructor
        self.grade = grade
        self.student_id = student_id

    def introduce(self):
        print(
            f"Hello, I'm {self.name}, a student with ID {self.student_id} and grade {self.grade}"
        )

    def study(self):
        print(f"{self.name} is studying hard!")


# 5. Class with Property Decorators
class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        if value < -273.15:  # Absolute zero
            raise ValueError("Temperature cannot be below absolute zero")
        self._celsius = value

    @property
    def fahrenheit(self):
        return (self._celsius * 9 / 5) + 32


# Testing all classes
if __name__ == "__main__":
    print("=== Testing Basic Person Class ===")
    person1 = Person("John", 36)
    person1.introduce()

    print("\n=== Testing Employee Class ===")
    emp1 = Employee("Alice", 28)
    emp2 = Employee("Bob", 32)
    emp1.introduce()
    emp2.introduce()
    print(Employee.get_company_info())

    print("\n=== Testing BankAccount Class ===")
    account = BankAccount("John Doe", 1000)
    account.deposit(500)
    account.introduce()
    print(f"Current balance: ${account.get_balance()}")

    print("\n=== Testing Student Class (Inheritance) ===")
    student = Student("Jane", 20, "A", "STU123")
    student.introduce()
    student.study()

    print("\n=== Testing Temperature Class (Properties) ===")
    temp = Temperature(25)
    print(f"Celsius: {temp.celsius}°C")
    print(f"Fahrenheit: {temp.fahrenheit}°F")
    temp.celsius = 30  # Using setter
    print(f"New Celsius: {temp.celsius}°C")
