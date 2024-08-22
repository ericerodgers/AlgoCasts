// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1]
  }
}

const weave = (queueOne, queueTwo) => {
  const woven = new Queue
  while (queueOne.peek() || queueTwo.peek()) {
    if (queueOne.peek()) {
      woven.add(queueOne.remove())
    } else if (queueTwo.peek()) {
      woven.add(queueTwo.remove())
    }
  }
  return woven
}

module.exports = Queue;
