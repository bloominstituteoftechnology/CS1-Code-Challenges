// reverseList.js

/* Write a function that will take the head of a singly-linked list, and
/* reverse it, such that the head is now the tail, and the node that head
/* pointed to now points to the old head (the new tail). */

function reverseList(node) {

  let reversedList;

  const helper = (previous, current) => {
    if (current === null) return previous;
    next = current.next;
    current.next = previous;
    return helper(current, next)
  }

  if (head === null || head.next === null) {
    return head;
  }
  
  newHead = head.next;
  head.next = null;
  reversedList = helper(head, newHead);
  return reversedList;
}
