package pattern.linkedlist;

import syntax.LinkedList;
import syntax.ListNode;

public class RemoveNthNodeFromEndofList {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};
        ListNode head = LinkedList.build(arr);

        ListNode result = removeNthFromEnd(head,2);
        LinkedList.display(result);
    }
    public static ListNode removeNthFromEnd(ListNode head, int n) {



        return head;
    }
}

/*
* Given the head of a linked list, remove the nth node from the end of the list and return its head.
*   Input: head = [1,2,3,4,5], n = 2
    Output: [1,2,3,5]
* */