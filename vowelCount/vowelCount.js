/*
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */

const vowelCount = (str) => {
  const c = str.match(/[aeiou]/ig);
  return c ? c.length : 0;
}

console.log(vowelCount('bcdfghjklmnpqrstvwxyz')); // => 0
console.log(vowelCount('Hello World!')); // => 3
console.log(vowelCount('The quick brown fox jumped over the lazy dog.')); // => 12
