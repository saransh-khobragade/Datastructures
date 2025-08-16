// Linked List implementation in Java
// Singly linked list with append, prepend, delete, find, reverse, and utility methods

public class Node<T> {
    T data;
    Node<T> next;

    public Node(T data) {
        this.data = data;
        this.next = null;
    }
}

public class LinkedList<T> {
    private Node<T> head;
    private int size;

    public LinkedList() {
        this.head = null;
        this.size = 0;
    }

    public void append(T data) {
        Node<T> newNode = new Node<>(data);
        if (head == null) {
            head = newNode;
        } else {
            Node<T> current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        size++;
    }

    public void prepend(T data) {
        Node<T> newNode = new Node<>(data);
        newNode.next = head;
        head = newNode;
        size++;
    }

    public boolean delete(T data) {
        if (head == null) return false;

        if (head.data.equals(data)) {
            head = head.next;
            size--;
            return true;
        }

        Node<T> current = head;
        while (current.next != null) {
            if (current.next.data.equals(data)) {
                current.next = current.next.next;
                size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    public Node<T> find(T data) {
        Node<T> current = head;
        while (current != null) {
            if (current.data.equals(data)) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    public void reverse() {
        Node<T> prev = null;
        Node<T> current = head;
        Node<T> next = null;

        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        head = prev;
    }

    public boolean isEmpty() {
        return head == null;
    }

    public int getSize() {
        return size;
    }

    public T peek() {
        return head != null ? head.data : null;
    }

    public T getAt(int index) {
        if (index < 0 || index >= size) return null;

        Node<T> current = head;
        int count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        return current.data;
    }

    public boolean insertAt(T data, int index) {
        if (index < 0 || index > size) return false;

        if (index == 0) {
            prepend(data);
            return true;
        }

        Node<T> newNode = new Node<>(data);
        Node<T> current = head;
        int count = 0;

        while (count < index - 1) {
            current = current.next;
            count++;
        }

        newNode.next = current.next;
        current.next = newNode;
        size++;
        return true;
    }

    public T removeAt(int index) {
        if (index < 0 || index >= size) return null;

        if (index == 0) {
            T data = head.data;
            head = head.next;
            size--;
            return data;
        }

        Node<T> current = head;
        int count = 0;

        while (count < index - 1) {
            current = current.next;
            count++;
        }

        T data = current.next.data;
        current.next = current.next.next;
        size--;
        return data;
    }

    public void clear() {
        head = null;
        size = 0;
    }

    public Object[] toArray() {
        Object[] result = new Object[size];
        Node<T> current = head;
        int index = 0;

        while (current != null) {
            result[index++] = current.data;
            current = current.next;
        }

        return result;
    }

    public void display() {
        System.out.println("LinkedList: " + java.util.Arrays.toString(toArray()));
    }
} 