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
    this.nextIndex = 0;
    this.state = {};
  }
  push(addItem) {
    this.state[this.nextIndex] = addItem;
    this.nextIndex++;
  }
  pop() {
    this.nextIndex--;
    delete this.state[this.nextIndex];
  }
  get(isIndex) {
    if (!this.state[isIndex]) return "nope, nuthin' there";
    return this.state[isIndex];
    // if (this.state[isIndex]) return this.state[isIndex];
    // return "nope, nuthin' there";
  }
  // will need to delete value at key#, then replace Key[n] with value at Key[n+1]
  // use current this.index or last existing ondex to exit the shifting?
  delete(indexValue) {
    this.state[indexValue] = ''
    while (indexValue < this.nextIndex) {
      this.state[indexValue] =this.state[indexValue + 1];
      indexValue++;
    }
    this.nextIndex = indexValue - 1;
  }
  getAllValues() {
    return Object.values(this.state);
  }
  getAllKeys() {
    return Object.keys(this.state);
  }
  getAllKeysAndValues() {
    return this.state
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
console.log(`TEST# 5: Q: to eat?          A: ${test.get(0)}`);
console.log(`TEST# 6: Q: a side?          A: ${test.get(1)}`);
console.log(`TEST# 7: Q: to drink?        A: ${test.get(2)}`);
console.log(`TEST# 8: Q: anything else?   A: ${test.get(3)}`);
test.pop();
console.log(`TEST# 9: Q: just water then? A: ${test.get(2)}`);
console.log(`TEST#10: Q: what's for dinner?\nA: ${test.getAllValues()}`);
test.push('this');
test.push('that');
test.push('the other thing');
test.push('something else');
test.push('another thing');
test.push('aaaaand another thing');
console.log(`TEST#11: Q: what all's in there?\nA: ${test.getAllValues()}`);
console.log(`TEST#12: Q: what all's where in there?\nA: ${test.getAllKeys()}`);
console.log(`TEST#13: Q: which what all's where in there?\nA: ${test.getAllKeysAndValues()}`);
console.log(test.getAllKeysAndValues());
test.delete(5);
console.log(`TEST#14: Q: did something get deleted?\nA: ${test.getAllKeysAndValues()}`);
console.log(test.getAllKeysAndValues());
console.log(`TEST#15: Q: What's the index set to?\nA: ${test.nextIndex}`);
test.push('well lookie thar!')
console.log(`TEST#16: Q: Did I add it to the right place?\nA: ${test.getAllKeysAndValues()}`);
console.log(test.getAllKeysAndValues());
