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
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(element) {
    const newNode = {
      index: 0,
      value: element,
      next: null,
      previous: null,
    }; 
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      newNode.index = this.length;
      this.length++;
    } else if (this.length === 1) {
      this.head.next = newNode;
      newNode.previous = this.head;
      this.tail = newNode;
      newNode.index = this.length;
      this.length++;
    } else {
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    newNode.index = this.length;
    this.length++;
    }
  }
  pop() {
    this.tail = this.tail.previous;
  }
  get(index) {
    let currentNode = this.head;
    while (currentNode.value) {
      if (currentNode.index === index) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
  }
  delete(index) {
    let currentNode = this.head;
    let nodePrevious;
    let nodeNext;
    while (currentNode.value) {
      if (currentNode.index === index - 1) {
        nodePrevious = currentNode;
        currentNode = currentNode.next;
        currentNode = currentNode.next;
        while (currentNode.next) {
          currentNode.previous = nodePrevious;
          nodePrevious = currentNode;
          currentNode.index -= 1;
          currentNode = currentNode.next;
        }
        currentNode.previous = nodePrevious;
        currentNode.index -= 1;
        currentNode = currentNode.previous;
        while (currentNode.index !== index) {
          currentNode = currentNode.previous;
        }
        nodeNext = currentNode
        currentNode = currentNode.previous;
        currentNode.next = nodeNext;
      return;
      }
    currentNode = currentNode.next;
    }
  }
}
