// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const counters = [0]
    const arr = [root, "stop"]
    while (arr.length > 1) {
        const node = arr.shift()
        if (node === "stop") {
            counters.push(0) // starts a new row's width counter
            arr.push("stop") // adds our stopper to the end of the array again
        } else {
            arr.push(...node.children)
            counters[counters.length - 1] += 1 // increments counter for the level we are on
        }
    }
    return counters
}

module.exports = levelWidth;
