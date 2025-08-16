// Date handling
import java.time.*;

public class Date {
    public static void main(String[] args) {
        LocalDateTime x = LocalDateTime.now();
        System.out.println(x);

        LocalDateTime y = LocalDateTime.of(2020, 5, 17, 0, 0);
        System.out.println(y);
    }
} 