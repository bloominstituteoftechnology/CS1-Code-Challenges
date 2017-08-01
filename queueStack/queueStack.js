/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */

 class Stack {
  constructor() {
    this.stack = [];
  }

  add(value) {
    this.stack.push(value);
  }

  remove() {
    return this.stack.pop();
  }
  get size() {
    return this.stack.length;
  }
}

/* Stack Test

const stack = new Stack;

stack.add(10);
stack.add(9);
stack.add(8);
console.log(stack.remove());
console.log(stack.remove());

console.log(stack);
*/

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  
  enqueue(value) {
    this.stack1.add(value);
  }

  dequeue() {
    if(!this.stack2.size) {
      if(!this.stack1.size) {
        return undefined;
      }
      while(this.stack1.size) {
        this.stack2.add(this.stack1.remove());
      }
    }
    return this.stack2.remove();
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
//console.log(queue.dequeue());
//console.log(queue.dequeue());

console.log(queue);