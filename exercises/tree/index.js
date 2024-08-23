// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = []
    }

    add(data) {
        this.children.push(new Node(data))
    }

    remove(data) {
        // instead of finding and removing the node with the data, we use the filter method to find and return all nodes that do NOT have the data, and reassign the children array
        this.children = this.children.filter(node => {
            return node.data !== data
        }) 
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    traverseBF(fn) {
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift()
            queue.push(...node.children)
            fn(node)
        }
    }

    traverseDF(fn) {
        // i don't like this answer because shift and unshift methods are slow because of array re-indexing
        // this should be done using recursion...
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift()
            arr.unshift(...node.children)
            fn(node)
        }
    }
}

module.exports = { Tree, Node };
