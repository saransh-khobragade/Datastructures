package pattern.linkedlist;

import syntax.ListNode;
import syntax.LinkedList;

public class MergeKSortedLinkedLists {
    public static void main(String[] args) {

        int[] list1 = {1, 2, 4};
        int[] list2 = {1, 3, 5};
        int[] list3 = {3, 6};


        ListNode l1 = LinkedList.build(list1);
        ListNode l2 = LinkedList.build(list2);
        ListNode l3 = LinkedList.build(list3);

        ListNode[] input = {l1, l2, l3};
        ListNode result = mergeKLists(input);
        LinkedList.display(result);

    }

    public static ListNode mergeKLists(ListNode[] lists) {
        return null;
    }
}
