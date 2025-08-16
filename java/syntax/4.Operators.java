// Operators
import java.util.*;

public class Operators {
    public static void main(String[] args) {
        // Arithmetic operators
        int a = 10;
        int b = 5;
        System.out.println(a + b); // 15
        System.out.println(a - b); // 5
        System.out.println(a * b); // 50
        System.out.println((double)a / b); // 2.0
        System.out.println(a % b); // 0 (mod)
        System.out.println(Math.pow(a, b)); // 100000.0

        // Assignment operators
        a = 10;
        b = 5;
        a += b; // a = a + b
        System.out.println(a); // 15
        a -= b; // a = a - b
        System.out.println(a); // 10
        a *= b; // a = a * b
        System.out.println(a); // 50
        a /= b; // a = a / b
        System.out.println(a); // 10

        // Comparison operators
        a = 10;
        b = 5;
        System.out.println(a == b); // false
        System.out.println(a != b); // true
        System.out.println(a > b); // true
        System.out.println(a < b); // false
        System.out.println(a >= b); // true
        System.out.println(a <= b); // false

        // Logical operators
        boolean boolA = true;
        boolean boolB = false;
        System.out.println(boolA && boolB); // false
        System.out.println(boolA || boolB); // true
        System.out.println(!boolA); // false

        // Identity operators (reference equality)
        Integer numA = 10;
        Integer numB = 5;
        System.out.println(numA == numB); // false
        System.out.println(numA != numB); // true

        // Membership operators (for collections)
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
        System.out.println(list.contains(a)); // false
        System.out.println(!list.contains(a)); // true
    }
} 