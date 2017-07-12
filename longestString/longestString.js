/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */
const arr = ['a'];
arr.push('good');
arr.push('morning');
arr.push('everyone');
arr.push('how');
arr.push('is');
arr.push('everyone');
arr.push('doing');

console.log(arr);
const longest = arr.reduce((a, b) => a.length >= b.length ? a : b
);

console.log(longest);