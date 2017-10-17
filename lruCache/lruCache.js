/*
 * Design and implement a LRU, or Least Recently Used, cache.
 *
 * An LRU cache gives O(1) get(key) and set(key, val) operations,
 * much like a hashtable, but once it reaches its limit for stored
 * number of items, removes the least recently used (i.e. the oldest
 * by get-date) item from the cache in O(1) time.
 *
 * For instance:
 *
 * const cache = new LRUCache(3); // limit of 3 items
 * cache.set("item1", 'a');
 * cache.set("item2", 'b');
 * cache.set("item3", 'c');
 * cache.set("item4", 'd');
 *
 * cache.get("item3") // 'c'
 * cache.get("item2") // 'b'
 * // item1 was removed because it was the oldest item by insertion/usage
 * cache.get("item1") //=> null
 *
 * // item4 is removed to make room, because it is the oldest by usage,
 * // which takes priority.
 * cache.set("item5", 'e');
 *
 * // item3 is also removed because it was retrieved before item2 was
 * // last retrieved.
 * cache.set("item6", 'f');
 *
 * You will need a doubly-linked list (provided).
 */

class LRUCache {
  constructor(limit = 10) {
    this.limit = limit;
    this.size = 0;
    this.storage = {};
    this.list = new List();
  }

  size() {
    return this.size;
  }

  get(key) {
    const node = this.storage[key];
    if (node) {
      this.list.moveToEnd(node);
      return node.val.val;
    }
    return null;
  }

  set(key, val) {
    let node;
    if ((node = this.storage[key])) {
      node.val.val = val;
      this.list.moveToEnd(node);
      return;
    }

    if (this.size === this.limit) {
      delete this.storage[this.list.head.val.key];
      this.list.shift();
      this.size--;
    }
    this.list.push({key, val});
    this.storage[key] = this.list.tail;
    this.size++;
  }
}

// Linked List Code

class ListNode {
  constructor(prev, val, next) {
    this.prev = prev || null;
    this.val = val;
    this.next = next || null;
  }

  // Insert a value right after the node.
  insertAfter(val) {
    const next = this.next;
    this.next = new ListNode(this, val, next);
    if (next) next.prev = this.next;
  }

  // Insert a value right before the node.
  insertBefore(val) {
    const prev = this.prev;
    this.prev = new ListNode(prev, val, this);
    if (prev) prev.next = this.prev;
  }

  delete() {
    if (this.prev) this.prev.next = this.next;
    if (this.next) this.next.prev = this.prev;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Insert at the front of the list
  unshift(val) {
    if (!this.head) {
      this.head = new ListNode(null, val, this.tail);
    } else if (!this.tail) {
      this.tail = this.head;
      this.head = new ListNode(null, val, this.tail);
      this.tail.prev = this.head;
    } else {
      this.head = new ListNode(null, val, this.head);
      this.head.next.prev = this.head;
    }
  }

  // Remove from the front of the list
  shift() {
    if (!this.head) {
      if (!this.tail) return null;
      return this.pop();
    } else {
      const head = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      return head.val;
    }
  }

  // Insert at the end of the list.
  push(val) {
    if (!this.tail) {
      this.tail = new ListNode(this.head, val, null);
    } else if (!this.head) {
      this.head = this.tail;
      this.tail = new ListNode(this.head, val, null);
      this.head.next = this.tail;
    } else {
      this.tail = new ListNode(this.tail, val, null);
      this.tail.prev.next = this.tail;
    }
  }

  // Delete at the end of the list.
  pop() {
    if (!this.tail) {
      if (!this.head) return null;
      return this.shift();
    } else {
      const tail = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      return tail.val;
    }
  }

  // Move a node to the front of the List
  moveToFront(node) {
    if (node === this.tail) {
      this.pop();
    } else {
      node.delete();
    }
    this.unshift(node.val);
  }

  // Move a node to the end of the List
  moveToEnd (node) {
    if (node === this.head) {
      this.shift();
    } else {
      node.delete();
    }
    this.push(node.val);
  }

  // Convert to an array
  toArray() {
    const next = this.head || this.tail;
    const result = [];
    while (next) {
      result.push(next.val);
      next = next.next;
    }
    return result;
  }

}

/***********************************************************************/
// TESTS

const cache = new LRUCache(3); // limit of 3 items
cache.set("item1", 'a');
cache.set("item2", 'b');
cache.set("item3", 'c');
cache.set("item4", 'd');

const item3 = cache.get("item3") // 'c'
if (item3 !== 'c') {
  throw new Error(`item3 was expected to be \'c\', but received ${item3} instead`);
} else {
  console.log(`item3 correctly returned ${item3}`);
}

const item2 = cache.get("item2") // 'b'
if (item2 !== 'b') {
  throw new Error(`item2 was expected to be \'b\', but received ${item2} instead`);
} else {
  console.log(`item2 correctly returned ${item2}`);
}

const item1 = cache.get("item1") //=> null
if (item1 !== null) {
  console.log(cache);
  throw new Error(`item1 was expected to be \'null\', but received ${item1} instead`);
} else {
  console.log('item1 correctly returned null');
}

cache.set("item5", 'e');
const item4 = cache.get("item4"); // => null
if (item4 !== null) {
  console.log(cache);
  throw new Error(`item4 was expected to be 'null', but received ${item4} instead`);
} else {
  console.log('item4 correctly returned null');
}

cache.set("item6", 'f');
const item3_2 = cache.get("item3"); // => null
if (item3_2 !== null) {
  console.log(cache);
  throw new Error(`item3 was expected to be null, but received ${item3_2} instead`);
} else {
  console.log('item3 correctly returned null');
}

const item6 = cache.get("item6"); // => 'f'
if (item6 !== 'f') {
  throw new Error(`item6 was expected to be null, but received ${item6} instead`);
} else {
  console.log(`item6 correctly returned ${item6}`);
}

const item5 = cache.get("item5");
if (item5 !== 'e') {
  throw new Error(`item5 was expected to be 'e', but receive ${item5} instead`);
} else {
  console.log(`item5 correctly returned ${item5}`);
}

cache.set("item5", 'g');
const item5_2 = cache.get("item5");
if (item5_2 !== 'g') {
  throw new Error(`item5 was expected to be 'g', but receive ${item5} instead`);
} else {
  console.log(`item5 correctly returned ${item5_2}`);
}

const item2_2 = cache.get("item2"); // => 'b'
if (item2_2 !== 'b') {
  throw new Error(`item2 was expected to be 'b', but received ${item2_2} instead`);
} else {
  console.log(`item2 correctly returned ${item2_2}`);
}
