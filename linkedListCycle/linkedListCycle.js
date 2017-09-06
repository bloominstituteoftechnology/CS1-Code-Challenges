/*
 * Create a function that returns true if a linked list contains a cycle, or false if it terminates
 *
 * Usually we assume that a linked list will end with a null next pointer, for example:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * const nodeA = new Node('A');
 * const nodeB = nodeA.next = new Node('B');
 * const nodeC = nodeB.next = new Node('C');
 * const nodeD = nodeC.next = new Node('D');
 * const nodeE = nodeD.next = new Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 * Hint: Search for Floyd's Tortoise and Hare algorithm.
 */

// Start T and H at first node
// If H reaches end, no loop
// Move H once
// If H reaches end, no loop
// Move T and H once
// If T & H on same spot, it's a loop
// go to step 2

const hasCycle = (node) => {
  let T = node;
  let H = node;
  const isEnd = (H) => {
    if (H.next === null) {
      return false;
    }
  };
  while (T && H && H.next) {
    isEnd(H);
    H = H.next;
    isEnd(H);
    H = H.next;
    T = T.next;
    if (H === T) {
      return true;
    }
  };
  return false;
}

class Node {
  constructor(node) {
    this.value = node;
    this.next = null;
  }
}
const nodeA = new Node('A');
const nodeB = nodeA.next = new Node('B');
const nodeC = nodeB.next = new Node('C');
const nodeD = nodeC.next = new Node('D');
const nodeE = nodeD.next = new Node('E');
console.log(hasCycle(nodeA)); // => false
nodeE.next = nodeB;
console.log(hasCycle(nodeA)); // => true
