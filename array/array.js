/* Make a class called Array.
 * It should have the methods push, pop, get(index), and delete(index).
 * get and delete should accept an index and get or remove the item at that index.
 * Make sure to shift the array items after deleting an item.
 * In your implementation use a JS object to build the array.
 * Do NOT use an array as the underlying data structure, that's cheating :)
 * How do these operations compare to that of a linked list?
 * How does the time complexity of insertion and deletion compare to that of a linked list?
 */

/* class Array() to construct an object such that key: value pairs are
    arranged {index: item, index: item, index: item ... }, e.g.
    {0: 'first item', 1: 'second item', 2: 'third item' ... (n-1): 'last item' }
*/

class Array {
  constructor() {
    this.index = 0; // <--- rename to nextIndex?
    this.state = {};
  }
  push(addItem) {
    this.state[this.index] = addItem;
    this.index++;
  }
  pop() {
    this.index--;
    delete this.state[this.index];
  }
  get(isIndex) {
    if (!this.state[isIndex]) return "nope, nuthin' there";
    return this.state[isIndex];
    // if (this.state[isIndex]) return this.state[isIndex];
    // return "nope, nuthin' there";
  }
  delete(killIndex) {

  }
  getAllValues() {
    return Object.values(this.state);
  }
};

// TEST SUITE
const test  = new Array();
console.log('TEST# 1 - Array() instance contains:', test);
// console.log(`TEST#1A - Array() instance contains: ${test}`); // ---> :(
test.push('chzbrgr');
console.log('TEST# 2 - Array() instance contains:', test);
test.push('salad');
console.log('TEST# 3 - Array() instance contains:', test);
test.push('iced tea');
console.log('TEST# 4 - Array() instance contains:', test);
console.log('TEST# 5 - Array() instance contains:', test);
console.log(`TEST# 6: Q: to eat?         A: ${test.get(0)}`);
console.log(`TEST# 7: Q: a side?         A: ${test.get(1)}`);
console.log(`TEST# 8: Q: to drink?       A: ${test.get(2)}`);
console.log(`TEST# 9: Q: anything else?  A: ${test.get(3)}`);
test.pop();
console.log(`TEST#10: Q: just water then? A: ${test.get(2)}`);
console.log(`TEST#11: Q: what's in there?\nA: ${test.getAllValues()}`);
