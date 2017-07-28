/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */

class Stack {
  constructor() {
    this.arr = [];
  }
  add(input) {
    return this.arr.push(input);
  }
  remove() {
    return this.arr.pop();
  }
  get size() {
    return this.arr.length;
  }
}

const queueStack = (stack) => {
  const tempStack = new Stack();
  for (i = stack.size - 1; i >= 0; i--) {
    tempStack.add(stack.remove());
  }
  tempStack.remove();
  for (i = tempStack.size - 1; i >= 0; i--) {
    stack.add(tempStack.remove());
  }
  return stack;
}
