/* Make a class called Array.
 * It should have the methods push, pop, get(index), and delete(index).
 * get and delete should accept an index and get or remove the item at that index.
 * Make sure to shift the array items after deleting an item.
 * In your implementation use a JS object to build the array.
 * Do NOT use an array as the underlying data structure, that's cheating :)
 * How do these operations compare to that of a linked list?
 * How does the time complexity of insertion and deletion compare to that of a linked list?
 */

/*
 * I think property accesses in an object are based upon a hash, and so would be
 * constant time accesses.  Push and pop would be constant time accesses in a linked
 * list.  However, searching for an item in a linked list is linear, whereas it would
 * be constant time in an object.  Deleting an item in a linked list is a constant time
 * operation, whereas it would be a linear operation in an object.  Tradeoffs.
 */

class Array {
  constructor(value) {
    this.length = 0;
    this.arrayObj = {};
  }

  lastIndex() {
    return this.length - 1;
  }

  nextIndex() {
    this.length++;
    return this.lastIndex();
  }

  reduceIndex() {
    this.length--;
    return this.length;
  }

  push(value) {
    this.arrayObj[this.nextIndex()] = value;
  }

  pop() {
    const value = this.arrayObj[this.lastIndex()];
    delete this.arrayObj[this.reduceIndex()];
    return value;
  }

  get(index) {
    return this.arrayObj[index]
  }

  delete(index) {
    let value;
    if ((value = this.arrayObj[index])) {
      for (let i = index; i < this.length - 1; i++) {
        this.arrayObj[i] = this.arrayObj[i + 1];
      }
      this.pop();
    }
    return value;
  }
}

const myArray = new Array();
myArray.push('first');
myArray.push('second');
myArray.push('third');
myArray.push('fourth');
console.log(myArray);
console.log(myArray.pop());
console.log(myArray);
console.log(myArray.get(2));
console.log(myArray.get(3));
console.log(myArray.get(0));
console.log(myArray.delete(1));
console.log(myArray);
