package syntax;

public class LinkedList {
    public static ListNode build(int[] input){

        ListNode head = new ListNode();
        ListNode ptr = head;

        for(int i: input){
            if(ptr == head && ptr.val==0){
                ptr.val = i;
            }else {
                ptr.next = new ListNode(i);
                ptr = ptr.next;
            }
        }
        return head;
    }

    public static void display(ListNode head){
        ListNode ptr = head;
        while(ptr!=null){
            System.out.println(ptr.val);
            ptr = ptr.next;
        }
    }
}
