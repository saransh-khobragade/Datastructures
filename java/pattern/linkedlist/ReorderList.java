package pattern.linkedlist;

import syntax.LinkedLists;
import syntax.ListNode;

public class ReorderList {
    public static void main(String[] args) {
        int[] input = {1,2,3,4};
        ListNode head = LinkedLists.build(input);
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

/*
* You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
* */