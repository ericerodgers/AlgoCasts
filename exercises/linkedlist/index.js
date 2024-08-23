// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);;
    }

    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            node = node.next
            counter += 1
        }
        return counter;
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let node = this.head;
        while (node) {
            if (node.next) {
                node = node.next
            } else {
                return node
            }
        }
        return null; // if this.head didn't exist in the first place
    }

    clear() {
        this.head = null;

        // this is my attempt to erase all nodes from memory as well
        // let node = this.head;
        // while (node) {
        //     const next = node.next;
        //     delete node.data;
        //     delete node.next;
        //     node = next;
        // }
        // this.head = null;
    }

    removeFirst() {
        if (!this.head) return;
        this.head = this.head.next;

        // this is my attempt to actually delete the old head node from memory
        // const head = this.head;
        // this.head = this.next;
        // delete head.data;
        // delete head.next;
    }

    removeLast() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        };
        let prevNode = this.head;
        let node = this.head.next;
        while (node.next) {
            prevNode = node
            node = node.next;
        }
        prevNode.next = null;
    }

    insertLast(data) {
        const last = this.getLast()
        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(idx) {
        let node = this.head;
        while (node) {
            if (idx === 0) {
                return node;
            }
            node = node.next
            idx -= 1
        }
        return null;
    }

    removeAt(idx) {
        if (!this.head) return;
        if (idx === 0) {
            this.head = this.head.next
        }
        const prevNode = this.getAt(idx - 1)
        if (!prevNode || !prevNode.next) return
        prevNode.next = prevNode.next.next

        // Less elegant solution does not use other methods I already built
        // let currNode = this.head;
        // let nextNode = currNode.next;
        // while (nextNode.next) {
        //     if (idx === 0) {
        //         currNode.next = nextNode.next
        //         delete nextNode.data;
        //         delete nextNode.next;
        //         return;
        //     }
        //     currNode = nextNode;
        //     nextNode = nextNode.next;
        //     idx -= 1
        // }
        // return undefined;
    }

    insertAt(data, idx) {
        if (!this.head) {
            this.head = new Node(data)
            return;
        }
        if (idx === 0) {
            this.head = new Node(data, this.head)
            return;
        }
        let prevNode = this.getAt(idx - 1)
        // in case index provided is out of bounds we attach new node to end of list
        if (!prevNode) {
            prevNode = this.getLast()
        }
        const node = new Node(data, prevNode.next)
        prevNode.next = node;
    }

    forEach(fn) {
        let node = this.head;
        while (node) {
            fn(node)
            node = node.next
        }
    }

    // this is a Generator function implementing a "for of" loop... for extra credit (see last test in test.js)
    *[Symbol.iterator]() {
        let node = this.head
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
