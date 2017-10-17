/* Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
 * Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold.
 * Implement a data structure SetOfStacks that mimics this.
 * SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.
 * SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack
 * (that is, pop( ) should return the same values as it would if there were just a single stack).
 */

class SetOfStacks {
  constructor(n) {
    this.n = n; // capacity of a single stack;
    this.stacks = []; // initially empty setOfStatcks
    this.stack = []; // initially empty current stack
  }

  push(value) {
    this.stack.push(value);
    if (this.stack.length === this.n) {
      this.stacks.push(this.stack.slice());
      this.stack = new Array();
    }
  }

  pop() {
    if (!this.stack.length) {
      if (this.stacks.length) {
        this.stack = this.stacks.pop().slice();
      }
    }
    return this.stack.pop();
  }

  show() {
    console.log('stack:   ', this.stack);
    let s = 0;
    for (let stack of this.stacks) {
      console.log(`stack ${s++}: `, stack);
    }
    console.log('\n');
  }
}

//######################################################################

const myStacks = new SetOfStacks(5);

myStacks.push(0);
myStacks.push(1);
myStacks.push(2);
myStacks.push(3);
myStacks.show();
myStacks.push(4);
myStacks.show();
myStacks.push(5);
myStacks.show();
myStacks.pop();
myStacks.show();
myStacks.pop();
myStacks.show();
myStacks.pop();
myStacks.pop();
myStacks.pop();
myStacks.show();
myStacks.pop();
myStacks.show();
myStacks.pop();
myStacks.show();
