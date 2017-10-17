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

class Node {
  constructor (value, next = null) {
    this.value = value;
    this.next = next;
  }
  toString() {
    return `Node ${this.value}`;
  }
}

const hasCycle = (node, node0 = nodeA) => {
  let tortoise = node0.next;
  let hare = tortoise.next;
  while (tortoise.value !== hare.value) {
    tortoise = tortoise.next;
    hare = (hare.next);
    if (!hare) {
      console.log(`no cycle found for ${node0}`);
      return false;
    }
    hare = hare.next;
    if (!hare) {
      console.log(`no cycle found for ${node0}`);
      return false;
    }
  }

  let mu = 0;
  tortoise = node0;
  while (tortoise.value !== hare.value) {
    tortoise = tortoise.next;
    hare = hare.next;
    mu++;
  }

  let lam = 1;
  hare = tortoise.next;
  while (tortoise.value !== hare.value) {
    hare = hare.next;
    lam++;
  }

  console.log(`cycle found for ${node0}; lambda=${lam}\tmu=${mu}`);
  return true;
}

const nodeA = new Node('A');
const nodeB = nodeA.next = new Node('B');
const nodeC = nodeB.next = new Node('C');
const nodeD = nodeC.next = new Node('D');
const nodeE = nodeD.next = new Node('E');
hasCycle(nodeA); // => false
nodeE.next = nodeB;
hasCycle(nodeA); // true;
