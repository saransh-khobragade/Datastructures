// Randomization
import java.util.*;

public class Randomize {
    public static void main(String[] args) {
        Random random = new Random();
        
        List<Integer> list1 = Arrays.asList(1, 2, 3, 4, 5, 6);
        System.out.println(list1.get(random.nextInt(list1.size()))); // random number from list

        System.out.println(random.nextInt(9) + 1); // random number from 1 to 10
    }
} 