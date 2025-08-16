// Type checking
import java.util.*;

public class TypeChecking {
    public static void main(String[] args) {
        int a = 1;
        String b = "2";
        List<Integer> c = Arrays.asList(1, 2, 3);
        Set<Integer> d = new HashSet<>(Arrays.asList(1, 2, 3));
        Map<String, String> e = new HashMap<>();
        e.put("a", "1");
        e.put("b", "2");
        e.put("c", "3");

        System.out.println(a.getClass()); // class java.lang.Integer
        System.out.println(b.getClass()); // class java.lang.String
        System.out.println(c.getClass()); // class java.util.Arrays$ArrayList
        System.out.println(d.getClass()); // class java.util.HashSet
        System.out.println(e.getClass()); // class java.util.HashMap

        // Type checking
        if (a instanceof Integer) {
            System.out.println("a is an integer");
        }
        if (b instanceof String) {
            System.out.println("b is a string");
        }

        if (a.getClass() == Integer.class) {
            System.out.println("a is an integer");
        }
        if (b.getClass() == String.class) {
            System.out.println("b is a string");
        }
    }
} 