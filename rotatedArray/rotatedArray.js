/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(n))
 */

const rotatedArraySearch = (arr, search) => {

  // to do a binary search, find the root node, i.e., min value
  const root = arr.reduce((r, e, i, a) => {
    return e < a[r] ? i : r;
  }, 0);

  // 'left' is the value of the leftmost element;
  // everything to the right of 'left' will be larger,
  // until the root node.  Everything to the left
  // of the rightmost element will be less through
  // the root node.
  const left = arr[0],
        end = arr.length - 1;

  const binSearch = (index) => {
    if (arr[index] === search) return index;
    if (index === 0 || index === end) return null;
    if (search >= left) return binSearch(index - 1);
    return binSearch(index + 1);
  }

  return binSearch(root);
}

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2)); // 5
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100)); // null
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 5)); // 1
console.log(rotatedArraySearch([ 9, 15, 62, 0, 1, 2, 5, 8], 15)); // 1
console.log(rotatedArraySearch([ 9, 15, 62, 0, 1, 2, 5, 8], 5)); // 6
console.log(rotatedArraySearch([ 9, 15, 62, 0, 1, 2, 5, 8], 9)); // 0
console.log(rotatedArraySearch([ 9, 15, 62, 0, 1, 2, 5, 8], 8)); // 7
console.log(rotatedArraySearch([ 9, 15, 62, 0, 1, 2, 5, 8], 3)); // null
