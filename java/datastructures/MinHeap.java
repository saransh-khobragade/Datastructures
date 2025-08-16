// Min Heap implementation in Java
// Basic heap operations: insert, extractMin, peek, isEmpty, size, clear, and toArray methods

import java.util.*;

public class MinHeap<T extends Comparable<T>> {
    private List<T> heap;

    public MinHeap() {
        this.heap = new ArrayList<>();
    }

    public void insert(T value) {
        heap.add(value);
        bubbleUp();
    }

    private void bubbleUp() {
        int index = heap.size() - 1;
        T element = heap.get(index);

        while (index > 0) {
            int parentIndex = (index - 1) / 2;
            T parent = heap.get(parentIndex);

            if (element.compareTo(parent) >= 0) break;

            // Swap with parent
            heap.set(parentIndex, element);
            heap.set(index, parent);
            index = parentIndex;
        }
    }

    public T extractMin() {
        if (isEmpty()) {
            return null;
        }

        T min = heap.get(0);
        T last = heap.remove(heap.size() - 1);

        if (heap.size() > 0) {
            heap.set(0, last);
            bubbleDown();
        }

        return min;
    }

    private void bubbleDown() {
        int index = 0;
        T element = heap.get(0);

        while (true) {
            int leftIndex = 2 * index + 1;
            int rightIndex = 2 * index + 2;
            int smallest = index;

            // Find smallest child
            if (leftIndex < heap.size() && heap.get(leftIndex).compareTo(heap.get(smallest)) < 0) {
                smallest = leftIndex;
            }
            if (rightIndex < heap.size() && heap.get(rightIndex).compareTo(heap.get(smallest)) < 0) {
                smallest = rightIndex;
            }

            if (smallest == index) break;

            // Swap with smallest child
            heap.set(index, heap.get(smallest));
            heap.set(smallest, element);
            index = smallest;
        }
    }

    public T peek() {
        return isEmpty() ? null : heap.get(0);
    }

    public boolean isEmpty() {
        return heap.size() == 0;
    }

    public int size() {
        return heap.size();
    }

    public void clear() {
        heap.clear();
    }

    public List<T> toArray() {
        return new ArrayList<>(heap);
    }

    public void display() {
        System.out.println("Heap: " + heap);
    }
} 