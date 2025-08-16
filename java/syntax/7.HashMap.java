// HashMap
import java.util.*;
import java.util.stream.Collectors;

public class HashMap {
    public static void main(String[] args) {
        // Blank dictionary
        Map<String, Integer> dic = new HashMap<>();
        dic.put("a", 5);
        dic.put("b", 10);

        // How to loop over dictionary
        for (Map.Entry<String, Integer> entry : dic.entrySet()) {
            System.out.println(entry.getKey() + " " + entry.getValue());
        }

        for (String key : dic.keySet()) {
            System.out.println(key);
        }

        for (Integer value : dic.values()) {
            System.out.println(value);
        }

        // How to check key exists in dictionary
        if (dic.containsKey("x")) {
            dic.put("x", dic.get("x") + 1);
        } else {
            dic.put("x", 1);
        }

        // Set unique but no unordered
        Map<String, Set<String>> setItems = new HashMap<>();
        setItems.put("A", new HashSet<>(Arrays.asList("B", "C")));
        setItems.put("B", new HashSet<>(Arrays.asList("A", "D", "E")));
        setItems.put("C", new HashSet<>(Arrays.asList("A", "F")));
        setItems.put("D", new HashSet<>(Arrays.asList("B")));
        setItems.put("E", new HashSet<>(Arrays.asList("B", "F")));
        setItems.put("F", new HashSet<>(Arrays.asList("C", "E")));
        System.out.println(setItems);

        // Dictionary key value pairs can use immutable keys mutable values
        Map<String, Integer> dictionary = new HashMap<>();
        dictionary.put("A", 12);
        dictionary.put("B", 122);
        dictionary.put("C", 45);
        dictionary.put("D", 76);
        dictionary.put("E", 23);
        dictionary.put("F", 2323);
        System.out.println(dictionary);

        System.out.println(dictionary.keySet());
        System.out.println(dictionary.values());

        // Add item or update to dictionary
        dictionary.put("G", 31);
        dictionary.put("G", 32);

        // Loop in dict
        for (Map.Entry<String, Integer> entry : dictionary.entrySet()) {
            System.out.println(entry.getKey() + " " + entry.getValue());
        }

        // Sorting dictionary by its values and converting to list of tuples
        List<Map.Entry<String, Integer>> sortedByValue = dictionary.entrySet()
                .stream()
                .sorted(Map.Entry.comparingByValue())
                .collect(Collectors.toList());
        System.out.println(sortedByValue);

        // Sorting dictionary by its keys and converting to list of tuples
        List<Map.Entry<String, Integer>> sortedByKey = dictionary.entrySet()
                .stream()
                .sorted(Map.Entry.comparingByKey())
                .collect(Collectors.toList());
        System.out.println(sortedByKey);

        // Complex key in dictionary using tuple (using List as key)
        Map<List<String>, Integer> d = new HashMap<>();
        d.put(Arrays.asList("a", "b", "c"), 1);
        System.out.println(d);
    }
} 