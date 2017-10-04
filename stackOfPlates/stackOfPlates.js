/* Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
 * Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold.
 * Implement a data structure SetOfStacks that mimics this.
 * SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.
 * SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack
 * (that is, pop( ) should return the same values as it would if there were just a single stack).
 */
 
 class stackSet  {
  constructor(capacity) {
    this.capacity = capacity;
    this.stackSet = [];
  }

  push(value) {
    if (this.stackSet.length === 0 || this.stackSet[this.stackSet.length - 1].length === this.capacity) {
      const newStack = [];
      newStack.push(value);
      this.stackSet.push(newStack);
    } else {
      this.stackSet[this.stackSet.length - 1].push(value);
    }
  }

  pop() {
    if (this.stackSet.length === 0) {
      return 'the stackset is empty';
    } else if (this.stackSet[this.stackSet.length - 1].length === 0) {
      this.stackSet.pop();
    }
    return this.stackSet[this.stackSet.length - 1].pop();
  }
}

// const stack = new stackSet(4);
// console.log(stack);
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// console.log(stack); --> [[1, 2, 3, 4]]
// stack.push(5);
// stack.push(6);
// stack.push(7);
// stack.push(8);
// console.log(stack); --> [[1, 2, 3, 4], [5, 6, 7, 8]]
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()
// console.log(stack) --> [[1, 2, 3, 4], []]
// stack.pop()
// console.log(stack); --> [[1, 2, 3]]
