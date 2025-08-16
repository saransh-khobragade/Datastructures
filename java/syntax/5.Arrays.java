// Arrays
import java.util.*;
import java.util.stream.Collectors;

public class Arrays {
    public static void main(String[] args) {
        List<String> arr = new ArrayList<>(Arrays.asList("apple", "banana", "cherry", "berry", "carry"));

        System.out.println(arr.get(0)); // apple

        // Length
        System.out.println(arr.size()); // 5

        // Add item
        arr.add("pineapple");
        System.out.println(arr); // [apple, banana, cherry, berry, carry, pineapple]

        // Insert at index
        arr.add(2, "potatoe");
        System.out.println(arr); // [apple, banana, potatoe, cherry, berry, carry, pineapple]

        // Extend/merge
        List<String> arr2 = Arrays.asList("kiwi", "orange");
        arr.addAll(arr2);
        System.out.println(arr);
        // [apple, banana, potatoe, cherry, berry, carry, pineapple, kiwi, orange]

        // Remove item
        arr.remove("apple");
        System.out.println(arr);
        // [banana, potatoe, cherry, berry, carry, pineapple, kiwi, orange]

        // Remove at index
        arr.remove(0);
        System.out.println(arr); // [potatoe, cherry, berry, carry, pineapple, kiwi, orange]

        // Sort list
        Collections.sort(arr);
        System.out.println(arr); // [berry, carry, cherry, kiwi, orange, pineapple, potatoe]
        
        Collections.sort(arr, Collections.reverseOrder());
        System.out.println(arr); // [potatoe, pineapple, orange, kiwi, cherry, carry, berry]

        // Reverse
        Collections.reverse(arr);
        System.out.println(arr); // [berry, carry, cherry, kiwi, orange, pineapple, potatoe]

        // Dynamic Array
        List<Integer> dynamicArr = Collections.nCopies(5, 1);
        System.out.println(dynamicArr);

        // Map an array
        List<Integer> numArr = Arrays.asList(1, 2, 3, 4, 5);
        List<Integer> squaredArr = numArr.stream()
                .map(x -> x * x)
                .collect(Collectors.toList());
        System.out.println(squaredArr); // [1, 4, 9, 16, 25]

        // Filter an array
        List<Integer> filteredArr = numArr.stream()
                .filter(x -> x % 2 == 0)
                .collect(Collectors.toList());
        System.out.println(filteredArr); // [2, 4]

        // Reduce an array
        int reducedValue = numArr.stream().reduce(0, Integer::sum);
        System.out.println(reducedValue); // 15

        // Destructure array
        List<String> destructureArr = Arrays.asList("apple", "banana");
        String a = destructureArr.get(0);
        String b = destructureArr.get(1);
        System.out.println(a + " " + b); // apple banana

        // Swap
        String temp = a;
        a = b;
        b = temp;
        System.out.println(a + " " + b); // banana apple

        // Slices
        List<String> sliceArr = new ArrayList<>(Arrays.asList("apple", "banana", "cherry", "berry", "carry"));

        // Slicing (start-included : end-excluded)
        System.out.println(sliceArr.subList(0, 1)); // [apple]
        System.out.println(sliceArr.subList(1, 2)); // [banana]

        // slicing (start-included : n)
        System.out.println(sliceArr.subList(1, sliceArr.size())); // [banana, cherry, berry, carry]

        // slicing (0: end-excluded)
        System.out.println(sliceArr.subList(0, 2)); // [apple, banana]

        // slicing-reverse (0: end-included)
        System.out.println(sliceArr.subList(0, sliceArr.size() - 1)); // [apple, banana, cherry, berry]

        // slicing-reverse (start-excluded : end-included)
        System.out.println(sliceArr.subList(sliceArr.size() - 3, sliceArr.size() - 1)); // [cherry, berry]
    }
} 