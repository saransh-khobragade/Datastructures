package pattern.linkedlist;

import syntax.LinkedLists;
import syntax.ListNode;

public class LinkedListCycle {
    public static void main(String[] args) {

        int[] arr = {3, 2, 0, -4};

        ListNode head = LinkedLists.build(arr);


        System.out.println(hasCycle(head));
    }

    public static boolean hasCycle(ListNode head) {
        ListNode ptr1 = head;
        ListNode ptr2 = head;

        while(true){

            if(ptr2==null || ptr2.next == null || ptr2.next.next == null){
                return false;
            }
            ptr1 = ptr1.next;
            ptr2 = ptr2.next.next;

            if(ptr1 == ptr2){
                return true;
            }
        }
    }
}

/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 *
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
 */