// Creating custom exceptions and throwing errors

// Custom exception classes
class AgeError extends Exception {
    public AgeError(String message) {
        super(message);
    }
}

class InvalidEmailError extends Exception {
    private String email;
    
    public InvalidEmailError(String email) {
        super("Invalid email format: " + email);
        this.email = email;
    }
    
    public String getEmail() {
        return email;
    }
}

public class ExceptionsErrors {
    // Throwing built-in exceptions
    public static double divideNumbers(double a, double b) throws IllegalArgumentException {
        if (b == 0) {
            throw new IllegalArgumentException("Cannot divide by zero!");
        }
        return a / b;
    }

    // Throwing custom exceptions
    public static int checkAge(int age) throws AgeError {
        if (age < 0) {
            throw new AgeError("Age cannot be negative!");
        }
        if (age > 150) {
            throw new AgeError("Age seems unrealistic!");
        }
        return age;
    }

    public static String validateEmail(String email) throws InvalidEmailError {
        if (!email.contains("@")) {
            throw new InvalidEmailError(email);
        }
        return email;
    }

    public static void main(String[] args) {
        // Example usage
        try {
            // Test custom exceptions
            checkAge(-5);
        } catch (AgeError e) {
            System.out.println("Age error: " + e.getMessage());
        }

        try {
            validateEmail("invalid-email");
        } catch (InvalidEmailError e) {
            System.out.println("Email error: " + e.getMessage());
        }

        try {
            divideNumbers(10, 0);
        } catch (IllegalArgumentException e) {
            System.out.println("Division error: " + e.getMessage());
        }
    }
} 