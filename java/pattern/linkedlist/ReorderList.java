package pattern.linkedlist;

import syntax.LinkedList;
import syntax.ListNode;

public class ReorderList {
    public static void main(String[] args) {
        int[] input = {1,2,3,4};
        ListNode head = LinkedList.build(input);
        reorderList(head);
    }
    public static ListNode reverseList(ListNode head){
        ListNode prev = null;
        ListNode curr = head;
        ListNode next = head.next;

        while(next != null){
            curr.next = prev;
            prev = curr;
            curr = next;
            next = curr.next;
        }
        curr.next = prev;
        return curr;
    }

    public static void reorderList(ListNode head) {
        if(head == null || head.next == null || head.next.next == null) return;

        ListNode slow = head;
        ListNode fast = head;

        while(fast != null){
            if (fast.next == null) break;
            slow = slow.next;
            fast = fast.next.next;
        }


        ListNode reversed = reverseList(slow.next);
        slow.next = null;

        ListNode ptr = head;
        ListNode temp;
        ListNode temp2;

        while (reversed != null) {
            temp = ptr.next;
            temp2 = reversed.next;

            ptr.next = reversed;
            reversed.next = temp;

            reversed = temp2;
            ptr = temp;
        }
    }
}
