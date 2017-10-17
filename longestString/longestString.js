/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */
function longestString(arr) {
  let longest = arr[0];
  return arr.forEach((elem) => { if (elem.length > longest.length) longest = elem; }), longest;
}
