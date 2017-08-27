// Define Node as a class
  // constructor passing in node
  // this.value = node
  // this.next = null

// define hasCycle as arrow function, that takes in a node
  // let slow = head
  // let fast = head
  // do while loop
    // if fast.next === null return false
    // fast = fast.next
    // if fast.next === null return false
    // fast = fast.next
    // slow = slow.next
  // while slow !== fast
  // return true

class Node {
  constructor(node) {
    this.value = node;
    this.next = null;
  }
}

const hasCycle = (head) => {
  let slow = head;
  let fast = head;
  do {
    if (fast.next === null) return false;
    fast = fast.next;
    if (fast.next === null) return false;
    fast = fast.next;
    slow = slow.next;
  } while (slow !== fast);
  return true;
}

const nodeA = new Node('A');
const nodeB = nodeA.next = new Node('B');
const nodeC = nodeB.next = new Node('C');
const nodeD = nodeC.next = new Node('D');
const nodeE = nodeD.next = new Node('E');
// A -> B -> C -> D -> E -> null
console.log(hasCycle(nodeA)); // false
nodeE.next = nodeB;
// A -> B -> C
//      ^    |
//      |    v
//      E <- D
console.log(hasCycle(nodeA)); // true


const findLoop = (list) => {
  let turtle = list;
  let hare = list;
  while(turtle && hare && hare.next) {
    turtle = turtle.next;
    hare = hare.next.next
    if( turtle === hare) {
      return true
    }
  }
  return false;
};
