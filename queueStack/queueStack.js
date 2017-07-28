/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */
class Stack {
  constructor(node) {
    this.stack = [],
    this.length = 0
  }
  add(node) {
    this.stack.push(node);
    this.length++;
  }
  remove() {
    this.length--;
    return this.stack.pop();
  }
  size() {
    return this.length;
  }
}

class Queue {
  constructor(node) {
    this.in = new Stack(node),
    this.out = new Stack(),
    this.length = 0;
  }
  add(node) {
    this.in.add(node);
    this.length++;
  }
  remove(){
    if (this.out.size === 0) {
      while (this.in.size > 0){
        this.out.add(this.in.remove());
      }
    this.length--,
    this.out.remove;
    }
  }
}


const stack = new Stack();
stack.add(5);
stack.add(7);
stack.add(11);
// console.log(stack.size());
// console.log(stack);
const queue = new Queue();
queue.add(5);
queue.add(7);
queue.add(11);
// console.log(queue);
console.log(stack.remove());
console.log(stack);
queue.remove()
console.log(queue);
