package pattern.linkedlist;

import syntax.ListNode;
import syntax.LinkedLists;

import java.util.PriorityQueue;

public class MergeKSortedLinkedLists {
    public static void main(String[] args) {

        int[] list1 = {1, 2, 4};
        int[] list2 = {1, 3, 5};
        int[] list3 = {3, 6};


        ListNode l1 = LinkedLists.build(list1);
        ListNode l2 = LinkedLists.build(list2);
        ListNode l3 = LinkedLists.build(list3);

        ListNode[] input = {l1, l2, l3};
        ListNode result = mergeKLists(input);
        LinkedLists.display(result);

    }

    public static ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> result = new PriorityQueue<>((a,b)-> a.val - b.val);
        ListNode head = new ListNode();
        ListNode ptr = head;


        for(ListNode l : lists){
            result.add(l);
        }

        while(result.size()!=0){
            ListNode l = result.remove();
            if(l.next!=null){
                result.add(l.next);
            }
            ptr.next =  new ListNode(l.val);
            ptr = ptr.next;
        }

        return head.next;
    }
}
