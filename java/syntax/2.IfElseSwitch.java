// if-else and switch
public class IfElseSwitch {
    public static void main(String[] args) {
        int x = 10;

        // if-else
        if (x > 5) {
            System.out.println("x is greater than 5");
        } else if (x == 5) {
            System.out.println("x is equal to 5");
        } else {
            System.out.println("x is less than 5");
        }

        // switch (Java 14+ enhanced switch)
        switch (x) {
            case 1 -> System.out.println("x is 1");
            case 2 -> System.out.println("x is 2");
            default -> System.out.println("x is not 1 or 2");
        }

        // Traditional switch (pre-Java 14)
        switch (x) {
            case 1:
                System.out.println("x is 1");
                break;
            case 2:
                System.out.println("x is 2");
                break;
            default:
                System.out.println("x is not 1 or 2");
                break;
        }
    }
} 