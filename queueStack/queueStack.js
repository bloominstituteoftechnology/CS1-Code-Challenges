/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */
class Stack {
  constructor() {
    this.stack = [],
    this.length = 0
  }
  add(node) {
    this.stack.push(node);
    this.length++;
  }
  remove() {
    if (this.stack.length === 0) {
      return null;
    }
    this.length--;
    return this.stack.pop();
  }
  size() {
    return this.length;
  }
}

class Queue {
  constructor() {
    this.in = new Stack(),
    this.out = new Stack(),
    this.length = 0;
  }
  add(node) {
    this.in.add(node);
    this.length++;
  }
  // remove doesn't work --> look at why
  remove(){
    if (this.out.size === 0) {
      while (this.in.size > 0){
        this.out.add(this.in.remove());
      }
    this.length--;
    return this.out.remove();
    }
  }
  // dequeue does work --> Tai's lecture
  dequeue() {
    if (this.out.length === 0) {
      for (let i = 0; i < this.in.length; i++){
        this.out.add(this.in.remove());
      }
    }
    return this.out.remove()
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
