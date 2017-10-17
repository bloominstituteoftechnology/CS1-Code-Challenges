/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */

class Stack {
    constructor() {
	this.stack = [];
    }
    push(value) {
	this.stack.push(value);
    }
    pop() {
	return this.stack.pop();
    }
    size() {
	return this.stack.length;
    }
}

class Queue {
    constructor() {
	this.q1 = new Stack;
	this.q2 = new Stack;
    }
    _transfer() {
	if (!this.q1.size()) return;
	this.q2.push(this.q1.pop());
	return this._transfer();
    }
    enqueue(value) {
	this.q1.push(value);
    }
    dequeue() {
	if (this.q1.size() && !this.q2.size()) {
	    this._transfer();
	}
	return this.q2.pop();
    }
}

// console.log('STACK');
// const myStack = new Stack;
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.push(4);
// console.log(myStack);
// console.log(myStack.pop());
// myStack.push(5);
// console.log(myStack);

console.log('\nQUEUE');
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
// console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
myQueue.enqueue(5);
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue);
