// Set operations
import java.util.*;

public class Set {
    public static void main(String[] args) {
        Set<Integer> a = new HashSet<>(Arrays.asList(1, 2, 3, 4));
        Set<Integer> b = new HashSet<>();

        b.add(4);
        b.add(6);

        // Common elements (intersection)
        Set<Integer> intersection = new HashSet<>(a);
        intersection.retainAll(b);
        System.out.println(intersection);

        // Difference
        Set<Integer> difference = new HashSet<>(a);
        difference.removeAll(b);
        System.out.println(difference);

        Set<Integer> s1 = new HashSet<>(Arrays.asList(1, 2, 3)); // create set from array
        System.out.println(s1); // [1, 2, 3]

        Set<Integer> s2 = new HashSet<>(Arrays.asList(1, 2, 3)); // create set from list
        System.out.println(s2); // [1, 2, 3]

        Set<Character> s3 = new HashSet<>();
        for (char c : "ABC".toCharArray()) {
            s3.add(c);
        }
        System.out.println(s3); // ['C', 'B', 'A']

        // Converting list to set
        Set<Integer> s4 = new HashSet<>(Arrays.asList(1, 2, 33, 4));
        System.out.println(s4);
    }
} 