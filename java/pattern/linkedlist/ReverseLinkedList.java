package pattern.linkedlist;

import syntax.LinkedList;
import syntax.ListNode;

public class ReverseLinkedList {
    public static void main(String[] args){
        Solution s = new Solution();
        int[] input = {1,2,3,4,5};
        ListNode head = LinkedList.build(input);
        LinkedList.display(s.reverseList(head));
    }

}
class Solution {
    public ListNode reverseList(ListNode head) {
        if (head == null) return head;
        ListNode prev = null;
        ListNode curr = head;
        ListNode next = curr.next;

        while(next!=null){
            curr.next = prev;
            prev = curr;
            curr = next;
            next = curr.next;
        }
        curr.next = prev;
        return curr;
    }
}