// Input handling
import java.util.*;
import java.util.stream.Collectors;

public class Input {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Example 1: Reading two space-separated integers
        try {
            System.out.print("Enter two integers (space-separated): ");
            String input = scanner.nextLine();
            String[] parts = input.split(" ");
            int p = Integer.parseInt(parts[0]);
            int c = Integer.parseInt(parts[1]);
            System.out.printf("p = %d, c = %d%n", p, c);
        } catch (NumberFormatException | ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Please enter two space-separated integers");
        }

        // Example 2: Reading space-separated integers into a list
        try {
            System.out.print("Enter space-separated integers: ");
            String input = scanner.nextLine();
            List<Integer> num = Arrays.stream(input.split(" "))
                    .map(Integer::parseInt)
                    .collect(Collectors.toList());
            System.out.println("List of integers: " + num);
        } catch (NumberFormatException e) {
            System.out.println("Error: Please enter space-separated integers only");
        }

        // Example 3: Reading a string and converting to list of characters
        System.out.print("Enter a string: ");
        String exp = scanner.nextLine();
        List<Character> charList = exp.chars()
                .mapToObj(c -> (char) c)
                .collect(Collectors.toList());
        System.out.println("List of characters: " + charList);

        // Example 4: Reading a single integer
        try {
            System.out.print("Enter a single integer: ");
            int singleNum = Integer.parseInt(scanner.nextLine());
            System.out.println("Single integer: " + singleNum);
        } catch (NumberFormatException e) {
            System.out.println("Error: Please enter a valid integer");
        }
        
        scanner.close();
    }
} 