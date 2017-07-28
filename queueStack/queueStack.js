/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */
class Stack() {
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  add(item) {
    this.stack.push(item);
    this.size = this.size + 1;
  }
  remove() {
    if (this.size > 0) {
      this.size = this.size -1;
    }
    return this.stack.pop();
  }
  size() {
    this.size = 0;
  }
};

const queue = () => {
  const stack1 = new Stack();
  const stack2 = new Stack(); 
}

enqueue(item) {
  stack1.add(item)
}