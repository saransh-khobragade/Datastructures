/*
Design a data structure to store the strings' count with the ability to return the strings with minimum and maximum counts.

Implement the AllOne class:

AllOne() Initializes the object of the data structure.
inc(String key) Increments the count of the string key by 1. If key does not exist in the data structure, insert it with count 1.
dec(String key) Decrements the count of the string key by 1. If the count of key is 0 after the decrement, remove it from the data structure. It is guaranteed that key exists in the data structure before the decrement.
getMaxKey() Returns one of the keys with the maximal count. If no element exists, return an empty string "".
getMinKey() Returns one of the keys with the minimum count. If no element exists, return an empty string "".
Note that each function must run in O(1) average time complexity.
Input
["AllOne", "inc", "inc", "getMaxKey", "getMinKey", "inc", "getMaxKey", "getMinKey"]
[[], ["hello"], ["hello"], [], [], ["leet"], [], []]
Output
[null, null, null, "hello", "hello", null, "hello", "leet"]

Explanation
AllOne allOne = new AllOne();
allOne.inc("hello");
allOne.inc("hello");
allOne.getMaxKey(); // return "hello"
allOne.getMinKey(); // return "hello"
allOne.inc("leet");
allOne.getMaxKey(); // return "hello"
allOne.getMinKey(); // return "leet"
*/
class DLNode {
    public count: Number;
    public keys: Set<String>;
    public next: DLNode;
    public prev: DLNode;

    constructor(count: Number) {
        this.count = count;
        this.keys = new Set();
    }
}
class AllOne {
    public head: DLNode;
    public tail: DLNode;
    public hmap: Map<String, DLNode>;

    constructor(node: DLNode, prev: DLNode) {
        this.head = new DLNode(-Infinity);
        this.tail = new DLNode(Infinity);
        this.hmap = new Map();

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addNextNode(node: DLNode, prev: DLNode) {
        //doubly linked list forward link
        const saved = prev.next;
        prev.next = node;
        node.next = saved;
        //doubly linked list back link
        node.prev = prev;
        saved.prev = node;
    }

    removeNode(node: DLNode) {
        if (node.prev) node.prev.next = node.next; //backlink
        if (node.next) node.next.prev = node.prev; //forward link
    }

    inc(key: string): void {
        if (!this.hmap.has(key)) {
            //if hashmap doesn not have key, so new new key will have 1 count
            if (this.head.next?.count != 1) {
                const newNode = new DLNode(1);
                this.addNextNode(newNode, this.head);
            }
            this.head.next.keys.add(key);
            this.hmap.set(key, this.head.next);
        } else {
            const node = this.hmap.get(key) as DLNode;
            let next = node?.next;
            //if incremented count node not present, then create
            if (next.count != (node.count as number) + 1) {
                const newNode = new DLNode((node.count as number) + 1);
                this.addNextNode(newNode, node);
                next = newNode;
            }
            //updated key
            next.keys.add(key);
            this.hmap.set(key, next);

            node.keys.delete(key);
            if (node.keys.size == 0) this.removeNode(node);
        }
    }

    dec(key: string): void {
        const node = this.hmap.get(key)!;

        if (node.count === 1) {
            // remove key entirely
            this.hmap.delete(key);
            node.keys.delete(key);
            if (node.keys.size === 0) this.removeNode(node);
        } else {
            let prev = node.prev!;
            if (prev.count !== (node.count as number) - 1) {
                const newNode = new DLNode((node.count as number) - 1);
                this.addNextNode(newNode, prev);
                prev = newNode;
            }
            prev.keys.add(key);
            this.hmap.set(key, prev);

            node.keys.delete(key);
            if (node.keys.size === 0) this.removeNode(node);
        }
    }

    getMaxKey(): string {
        const candidate = this.tail.prev!;
        if (candidate === this.head) return "";
        return candidate.keys.values().next().value;
    }

    getMinKey(): string {
        const candidate = this.head.next!;
        if (candidate === this.tail) return "";
        return candidate.keys.values().next().value;
    }
}
