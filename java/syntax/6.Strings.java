// Strings
import java.util.*;

public class Strings {
    public static void main(String[] args) {
        // String interpolation
        String abc = String.format("Hello %d", 10);
        System.out.println(abc);

        // Multi line string
        String multiLineString = """
            This is a multi line string
            This is a multi line string""";
        System.out.println(multiLineString);

        // LENGTH OF STRING
        String a = "Hello, World!";
        System.out.println(a.length()); // 13

        // CHECK IN STRING
        String txt = "The best things in life are free!";
        if (txt.contains("free")) {
            System.out.println("Yes, 'free' is present.");
        }
        if (!txt.contains("abc")) {
            System.out.println("Yes, 'abc' not is present.");
        }

        // Splitting a string into array
        System.out.println(Arrays.toString(txt.split("")));
        // [T, h, e,  , b, e, s, t,  , t, h, i, n, g, s,  , i, n,  , l, i, f, e,  , a, r, e,  , f, r, e, e, !]

        // Joining a list into a string
        List<String> arr = Arrays.asList("Hello", "World");
        System.out.println(String.join(" ", arr)); // Hello World

        // Slicing a string
        String str = "Saransh";
        System.out.println(str.charAt(1)); // a from index 1 only one element
        System.out.println(str.charAt(str.length() - 2)); // s from last second index only one element
        System.out.println(str.substring(2, 5)); // ran [including:excluding]

        // Trimming a string
        str = "   Hello, World!   ";
        System.out.println(str.trim()); // "Hello, World!" (removes leading and trailing spaces)
        System.out.println(str.stripLeading()); // "Hello, World!   " (removes leading spaces)
        System.out.println(str.stripTrailing()); // "   Hello, World!" (removes trailing spaces)
    }
} 