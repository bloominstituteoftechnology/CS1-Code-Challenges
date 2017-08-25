/*
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */
const vowelCount = (str) => {
  return str.match(/[aeiou]/gi).length;
};