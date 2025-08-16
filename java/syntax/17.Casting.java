// Type casting
import java.util.*;

public class Casting {
    public static void main(String[] args) {
        int a = Integer.parseInt("1");
        double b = Double.parseDouble("4.2");
        String c = String.valueOf(2);
        List<Integer> d = new ArrayList<>();
        for (int i = 1; i < 10; i++) {
            d.add(i);
        }
        Object[] e = d.toArray(); // tuple equivalent
        Set<Integer> f = new HashSet<>(d);
        Map<String, Object> g = new HashMap<>();
        g.put("name", "John");
        g.put("age", 30);

        System.out.println(a + " " + b + " " + c + " " + d + " " + Arrays.toString(e) + " " + f + " " + g);
    }
} 