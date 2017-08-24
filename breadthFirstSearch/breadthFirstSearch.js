/*
 * Write a function that accepts a tree data structure and a value to search for.
 * Search for the value using a breadth-first search algorithm.
 * You can read about it here: https://en.wikipedia.org/wiki/Breadth-first_search
 * Example:
 * const tree = {
 *	x: 1,
 *	y: 1,
 *	z: {
 *		x: 1,
 *		y: 1,
 *		z: 1,
 *		},
 *	a: 2,
 * };
 * breadthFirstSearch(tree, 2);// will return true before it recursively searches `z`
 */

// Use a helper queue
class Queue {
  constructor(){
    this.items = [];
    this.size = 0;
  }
  enqueue(item){
    this.items.push(item);
    this.size++;
  }
  dequeue(){
    return this.items.shift();
  }
  isEmpty(){
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }
}
const breadthFirst = (tree, value) => {
  const queue = new Queue();
// Enqueue first vertex
// Dequeue first vertex, enqueue its children
// Continue dequeueing a vertex and enqueueing its children
}

// Ben's code:
const BFS = (tree, searchTerm) => {
  const queue = Object.values(tree);
  while(queue.length > 0) {
    const value = queue.shift();
    if (value === searchTerm) {
      return true;
    }
    if (typeOf value === 'object' && value !== null && !Array.isArray(value)) {
      queue = queue.concat(Object.values(value));  // push would just nest array instead of making it a big array
    }
  }
  return false;
};
