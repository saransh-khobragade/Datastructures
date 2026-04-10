/**
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */

package pattern.linkedlist;

import syntax.LinkedLists;
import syntax.ListNode;

public class MergeTwoSortedLists {
    public static void main(String[] args) {
        int[] input1 = {-9,3};
        int[] input2 = {5,7};

        ListNode list1 = LinkedLists.build(input1);
        ListNode list2 = LinkedLists.build(input2);

        ListNode head = mergeTwoLists(list1,list2);
        LinkedLists.display(head);
    }
    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {

        ListNode ptr1 = list1;
        ListNode ptr2 = list2;

        if(ptr1 == null){
            return ptr2;
        }
        if(ptr2 == null){
            return ptr1;
        }

        ListNode ptr = new ListNode();
        ListNode head = ptr;

        while(ptr1!=null && ptr2!=null){
            if(ptr1.val<=ptr2.val){
                ptr.next = new ListNode(ptr1.val);
                ptr1 = ptr1.next;
            }else{
                ptr.next = new ListNode(ptr2.val);
                ptr2 = ptr2.next;
            }
            ptr = ptr.next;
        }
        if(ptr1 == null){
            ptr.next = ptr2;
        }else if(ptr2 == null){
            ptr.next = ptr1;
        }
        return head.next;
    }
}
