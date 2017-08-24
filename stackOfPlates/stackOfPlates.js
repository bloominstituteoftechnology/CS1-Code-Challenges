/* Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
 * Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold.
 * Implement a data structure SetOfStacks that mimics this.
 * SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.
 * SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack
 * (that is, pop( ) should return the same values as it would if there were just a single stack).
<<<<<<< HEAD
 */

 class StackOfPlates {

 constructor(n = 5) {
   this._stacks = [[]];
   this._limit = n;
 }

 push(value) {
  if (this._topStack.length === this._limit) {
    this._stacks.push([value]);
    return this.length;
  }
  this._topStack.push(value);
  return this.length;
 }

 pop() {
  if (this._topStack.length === 0 && this._stacks.length > 1) {
    this._stacks.pop();
  }
  return this._topStack.pop();
 }

 get length() {
   return (this._stacks.length - 1) * this._limit + this._topStack.length;
 }

 get _topStack() {
  return this._stacks[this._stacks.length - 1];
 }
}
=======
 */
>>>>>>> a06f5c6c1a89c7c0e8d015d76b97203e150af56c
