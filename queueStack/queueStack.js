/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */
class Stack() {
  constructor() {
    this.storage = [];
    this.size = 0;
  }

  add(item) {
    this.storage.push(item);
    this.size = this.size + 1;
  }
  remove() {
    if (this.size > 0) {
      this.size = this.size -1;
    }
    return this.storage.pop();
  }
  size() {
    this.size = 0;
  }
};

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(item) {
    this.stack1.add(item);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      const length = this.stack1.length;
      for (let i = 0; i < length; i++) {
        this.stack2.add(this.stack1.remove());
      }
    }
    return this.stack2.remove();
  }
}