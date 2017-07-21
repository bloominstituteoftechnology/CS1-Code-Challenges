/* Make a class called Array.
 * It should have the methods push, pop, get(index), and delete(index).
 * get and delete should accept an index and get or remove the item at that index.
 * Make sure to shift the array items after deleting an item.
 * In your implementation use a JS object to build the array.
 * Do NOT use an array as the underlying data structure, that's cheating :)
 * How do these operations compare to that of a linked list?
 * How does the time complexity of insertion and deletion compare to that of a linked list?
 */

class Array {
  constructor() {
    this.state = {
    },
    this.index = 0,
    this.item = null
  }
  push(item) {
    this.state.index = item;
    this.index++;
  }
  pop(item) {

  }
  get(index) {

  }
  delete(index) {

  }
};

// TEST SUITE
const test  = new Array();
console.log(test);
test.push('chzbrgr');
console.log(test);
test.push('salad');
console.log(test);
