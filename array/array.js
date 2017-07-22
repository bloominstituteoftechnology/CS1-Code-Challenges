/* Make a class called Array.
 * It should have the methods push, pop, get(index), and delete(index).
 * get and delete should accept an index and get or remove the item at that index.
 * Make sure to shift the array items after deleting an item.
 * In your implementation use a JS object to build the array.
 * Do NOT use an array as the underlying data structure, that's cheating :)
 * How do these operations compare to that of a linked list?
 * How does the time complexity of insertion and deletion compare to that of a linked list?
 */

/* An array is defined as a collection of data items that can be selected by indices
 * computed at runtime.  For best performance, an array should have constant time
 * lookup.  However, this probably requires the use of pointers, which JS does not
 * have.  So, this array is arranged as a linked list.  The class contains two property
 * items: a value, and a next element.  The push() method adds an item onto the end
 * of the linked list, while the pop() method removes a link to the final item.  The
 * get() method counts items sequentially to return the requested index, while the
 * delete() method does the same, but simply deletes the item and sets the next element
 * property to the deleted items next element property.  The class also contains three
 * convenience functions, list(), which lists all of the data items in insertion order,
 * find(), which uses a callback to find a data item, and last(), which is used as the
 * callback function for the push() and pop() methods.  In this implementation, the
 * complexity of insertion and deletion are equivalent to that of a linked list.
 */

class Array {
  constructor (value = null) {
    this.first = null;
    this.last = null;
    this.next = null;
    this.prior = null;
    this.value = value;
  }

  list (e = this.first, i = 0) {
    if (e) {
      console.log(`index: '${i}'\tvalue: '${e.value}'`);
      return this.list(e.next, ++i);
    }
    return;
  }

  push (value) {
    const newElement = new Array(value);

    if (!this.first && !this.last) {
      this.first = newElement;
      this.last = newElement;
    } else if (this.first === this.last) {
      this.first.next = newElement;
      this.last = newElement;
      newElement.prior = this.first;
    } else {
      this.last.next = newElement;
      newElement.prior = this.last;
      this.last = newElement;
    }
  }

  pop() {
    let popped = null;
    if (this.last) {
      popped = this.last.value;
      this.last = this.last.prior;
    }
    return popped;
  }
}

const myArray = new Array();
myArray.push('first');
myArray.push('second');
myArray.push('third');
myArray.push('fourth');
myArray.list();
