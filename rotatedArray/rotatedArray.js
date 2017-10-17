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

const rotatedArraySearch = (array, search) => {
    const root = array.reduce((acc, elem, index, arr) => {
	return elem < arr[acc] ? index : acc;
    }, 0);

    const binarySearch = (left, right) => {
	const root = left + Math.floor((right - left) / 2);
	if (array[root] === search) return root;
	if ((right - left) === 0) return null;
	if (array[root] > search) return binarySearch(left, root);
	return binarySearch(root + 1, right);
    }

    if (array[root] === search) return root;
    if (array[0] < search) return binarySearch(0, root)
    return binarySearch(root + 1, array.length);
}

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2)); // 5
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100)); // null
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 5)); // 1
console.log(rotatedArraySearch([ 9, 15, 62, 0, 1, 2, 5, 8], 15)); // 1
console.log(rotatedArraySearch([ 9, 15, 62, 0, 1, 2, 5, 8], 5)); // 6
console.log(rotatedArraySearch([ 9, 15, 62, 0, 1, 2, 5, 8], 9)); // 0
console.log(rotatedArraySearch([ 9, 15, 62, 0, 1, 2, 5, 8], 8)); // 7
console.log(rotatedArraySearch([ 9, 15, 62, 0, 1, 2, 5, 8], 3)); // null
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 3)); // 6
console.log(rotatedArraySearch([10, 13, 50, 99, 0, 4, 6, 7, 0], 6)); // 6
console.log(rotatedArraySearch([10, 13, 50, 99, 0, 4, 6, 7, 0], 99)); // 3
