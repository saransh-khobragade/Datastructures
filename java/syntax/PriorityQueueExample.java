package syntax;

import java.util.PriorityQueue;

public class PriorityQueueExample {
    public static void main(String[] args) {
        int[] arr1 = {1,2,3};
        int[] arr2 = {8,6,4};
        int[] arr3 = {10,7,13};

        PriorityQueue<Integer> queue = new PriorityQueue<>((a,b)-> a-b);


        for(int i : arr1){
            queue.add(i);
        }
        for(int i : arr2){
            queue.add(i);
        }
        for(int i : arr3){
            queue.add(i);
        }

        while(queue.size() != 0){
            int ele = queue.remove();
            System.out.println(ele);
        }
    }
}
