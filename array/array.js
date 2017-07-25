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
    this.storage = {};
    this.length = 0;
  }

  get(index) {
    return this.storage[index];
  }

  delete(index) {
    delete this.storage[index];
    for (let i = index; i <= this.length; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this.length--;
  }

  push(element) {
    this.storage[this.length] = element;
    this.length++;
  }

  pop() {
    const lastIndex = this.length -1;
    const valueToReturn = this.storage[lastIndex];
    delete this.storage[lastIndex];
    this.length--;
    return valueToReturn;
  }
}