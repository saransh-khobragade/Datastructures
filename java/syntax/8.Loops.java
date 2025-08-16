// Loops
import java.util.*;

public class Loops {
    public static void main(String[] args) {
        // While loop
        int i = 0;
        while (i < 3) {
            System.out.println(i);
            i++;
        }
        // 0
        // 1
        // 2

        // For loop for elements
        String[] fruits = {"apple", "banana", "cherry"};
        for (String x : fruits) {
            System.out.println("first " + x);
        }
        // first apple
        // first banana
        // first cherry

        // For loop for index
        for (int j = 0; j < fruits.length; j++) {
            System.out.println(j);
        }
        // 0
        // 1
        // 2

        // For loop for index and element
        for (int k = 0; k < fruits.length; k++) {
            System.out.println(k + " " + fruits[k]);
        }
        // 0 apple
        // 1 banana
        // 2 cherry

        // For loop for range
        for (int l = 0; l < 2; l++) {
            System.out.println(l);
        }
        // 0
        // 1

        // For loop for range
        for (int m = 2; m < 4; m++) {
            System.out.println("third " + m);
        }
        // third 2
        // third 3

        // For loop for range with step
        for (int n = 2; n < 6; n += 2) {
            System.out.println("fourth " + n);
        }
        // fourth 2
        // fourth 4

        Map<String, String> d = new HashMap<>();
        d.put("name", "John");
        d.put("age", "30");
        d.put("city", "New York");
        
        // For loop in dictionary/object
        for (Map.Entry<String, String> entry : d.entrySet()) {
            System.out.println(entry.getKey() + " " + entry.getValue());
        }
        // name John
        // age 30
        // city New York
    }
} 