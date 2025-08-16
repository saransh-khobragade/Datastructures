// Variables
import java.util.*;

public class Variables {
    public static void main(String[] args) {
        int integer = 12;
        String str = "Saransh";
        double floatVar = 20.5;
        boolean bool = true;
        Object nullValue = null;
        
        // Multiple declaration
        String a = "Orange", b = "Banana", c = "Cherry";
        
        // Arrays
        String[] arr = {"apple", "banana", "cherry"};
        
        // Tuple equivalent (using Object array)
        Object[] tuple = {"apple", "banana", "cherry"};
        
        // HashMap
        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("name", "John");
        hashMap.put("age", 36);
        
        // Set
        HashSet<String> set = new HashSet<>();
        set.add("apple");
        set.add("banana");
        set.add("cherry");
        
        // Infinity
        double infinite = Double.POSITIVE_INFINITY;

        System.out.println(integer); // 12
        System.out.println(str); // Saransh
        System.out.println(floatVar); // 20.5
        System.out.println(nullValue); // null
        System.out.println(a + " " + b + " " + c); // Orange Banana Cherry
        System.out.println(Arrays.toString(arr)); // [apple, banana, cherry]
        System.out.println(Arrays.toString(tuple)); // [apple, banana, cherry]
        System.out.println(hashMap); // {name=John, age=36}
        System.out.println(set); // [banana, apple, cherry]
        System.out.println(infinite); // Infinity
    }
} 