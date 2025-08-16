// Stack implementation in Java
// LIFO data structure with push, pop, peek, isEmpty, size, clear, and toArray methods

import java.util.*;

public class Stack<T> {
    private List<T> items;

    public Stack() {
        this.items = new ArrayList<>();
    }

    public void push(T element) {
        items.add(element);
    }

    public T pop() {
        if (isEmpty()) {
            return null;
        }
        return items.remove(items.size() - 1);
    }

    public T peek() {
        if (isEmpty()) {
            return null;
        }
        return items.get(items.size() - 1);
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
        System.out.println("Stack: " + items);
    }
} 