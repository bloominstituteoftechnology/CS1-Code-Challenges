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

const breadthFirstSearch = (tree, val) => {

  let Q = (Object.entries(tree));

  while (Q.length) {
    const C = Q.shift();
    console.log(C, "-", Q);
    if (C[1] === val) return true;
    if (typeof C[1] === 'object' && C[1] !== null) {
      const O = Object.entries(C[1]);
      O.forEach(e => Q.push(e));
    }
  }
  return false;
}

const tree = {
x: 1,
y: 1,
n: null,
z: {
	x: 1,
	y: 1,
	z: 1,
	},
a: 2,
};

console.log(breadthFirstSearch(tree, 2));
console.log(breadthFirstSearch(tree, 3));
