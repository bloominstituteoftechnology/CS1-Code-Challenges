function reverseList(node) {
  if (node.next === null) return node;
  let current = node;
  let previous = null;
  while (current) {
    let floating = current.next;
    current.next = previous;
    previous = current;
    current = floating;
  }
  return previous;
}
