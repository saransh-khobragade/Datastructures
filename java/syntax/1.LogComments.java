// Log
public class LogComments {
    public static void main(String[] args) {
        // Hello world
        System.out.println("Hello world"); // Hello world
        System.out.println("Hello " + 23); // Hello 23

        // Inline string substitution
        System.out.printf("Hello %d%n", 23); // Hello 23

        // String interpolation
        String abc = String.format("Hello my age is %d", 10);
        System.out.println(abc);

        // Comments
        // This is a single line comment
        System.out.println("Hello, World!");

        // This is a multiline comment
        /*
        Multiline comment
        */

        // String concatenation
        String name = "John";
        int age = 25;
        System.out.println("Hello, " + name + "! You are " + age + " years old.");

        // Template strings (using String.format)
        String template = String.format("Hello, %s! You are %d years old.", name, age);
        System.out.println(template);
    }
} 