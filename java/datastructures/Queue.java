// Queue implementation in Java
// FIFO data structure with enqueue, dequeue, peek, isEmpty, size, clear, and toArray methods

import java.util.*;

public class Queue<T> {
    private List<T> items;

    public Queue() {
        this.items = new ArrayList<>();
    }

    public void enqueue(T element) {
        items.add(element);
    }

    public T dequeue() {
        if (isEmpty()) {
            return null;
        }
        return items.remove(0);
    }

    public T peek() {
        if (isEmpty()) {
            return null;
        }
        return items.get(0);
    }

    public boolean isEmpty() {
        return items.size() == 0;
    }

    public int size() {
        return items.size();
    }

    public void clear() {
        items.clear();
    }

    public List<T> toArray() {
        return new ArrayList<>(items);
    }

    public void display() {
        System.out.println("Queue: " + items);
    }
} 