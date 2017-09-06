/* Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
 * Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold.
 * Implement a data structure SetOfStacks that mimics this.
 * SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.
 * SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack
 * (that is, pop( ) should return the same values as it would if there were just a single stack).
 */

class SetOfStacks {
  constructor(limit){
    this.stackOfStacks = [[]]
    this.limit = limit;
    this.size = 0;
    this.topStack = this.stackOfStacks.length - 1;
  }
  push(){
  // if size === limit, make new stack
    if (this.topStack.length === this.limit) {
      this.stackOfStacks.push([]);
    }
  // if not just add and increment size
    this.topStack.
  }
  pop(){
  // if top stack is equal to 0, remove this stack and make next one in line the top stack
  }
}
