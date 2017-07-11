/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

const longestString = (arr) => {
  let long = '';
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length >= long.length) long = arr[i];
  }
  return long;
};