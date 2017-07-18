/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

const longestStr = (strArray) => {
  longest = ' ';
  strArray.forEach((word) => {
    if (word.length > longest.length) longest = word;
  });
  return longest;
}