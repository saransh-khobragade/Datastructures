// Try-catch
import java.util.Scanner;

public class TryCatch {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Basic try-catch
        try {
            System.out.print("Enter a number: ");
            int number = Integer.parseInt(scanner.nextLine());
            double result = 10.0 / number;
            System.out.printf("Result: %.2f%n", result);
        } catch (NumberFormatException e) {
            System.out.println("Please enter a valid number!");
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero!");
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        } finally {
            System.out.println("This always runs!");
            scanner.close();
        }
    }
} 