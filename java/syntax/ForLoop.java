package syntax;

import java.util.Arrays;

public class ForLoop {
    public static void main(String[] args){
        int[] arr = new int[5];
        Arrays.fill(arr, 1);
        for (int num : arr) {
            System.out.println(num);
        }
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}
