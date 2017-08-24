/*
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */

const vowelCount = (str) => {
  obj = {
    'a': 'a',
    'e': 'e',
    'i': 'i',
    'o': 'o',
    'u': 'u'
  };
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (obj[str.toLowerCase()[i]]) count++;
  }
  return count;
};
