# Creating custom exceptions and raising errors

# Custom exception class
class AgeError(Exception):
    pass

class InvalidEmailError(Exception):
    def __init__(self, email):
        self.email = email
        self.message = f"Invalid email format: {email}"
        super().__init__(self.message)

# Raising built-in exceptions
def divide_numbers(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero!")
    return a / b

# Raising custom exceptions
def check_age(age):
    if age < 0:
        raise AgeError("Age cannot be negative!")
    if age > 150:
        raise AgeError("Age seems unrealistic!")
    return age

def validate_email(email):
    if '@' not in email:
        raise InvalidEmailError(email)
    return email

# Example usage
try:
    # Test custom exceptions
    check_age(-5)
except AgeError as e:
    print(f"Age error: {e}")

try:
    validate_email("invalid-email")
except InvalidEmailError as e:
    print(f"Email error: {e}")

try:
    divide_numbers(10, 0)
except ValueError as e:
    print(f"Division error: {e}")
