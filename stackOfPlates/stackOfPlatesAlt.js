class StackOfPlates {
  // contructor, and needs to take in a number that we set as stack height
    // make a _stack holder
    // set _stackheight as given.
  
  // make push (value)
    // if _topStack.length === _stackHeight
      // _stack.push([value])
      // return length
    // _topStack.push(value)
    // return length
  // make pop
    // if _topStack.length === 0 && length > 1
      // _stacks.pop()
      // return _topStack.pop()
    // return _topStack.pop()
  // get length
    // (return _stacks.length - 1) * _stackHeight + _topStack.length;
  // get _topStack
    // return _stacks[_stacks.length - 1];
  
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
//       return this._topStack.pop();
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
const stack = new StackOfPlates(2);
stack.push('a');
stack.push('b');
stack.push('c');
stack.push('d');
stack.push('e');
console.log(stack);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
