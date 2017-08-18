/**
 * Common Characters:
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. *
 * Your function should return the common characters in the same order that they appear in the first argument.
 * Do not return duplicate characters and ignore whitespace in your returned string.  *
 * Example: commonCharacters('acexivou', 'aegihobu')  *
 * Returns: 'aeiou'
*/

const eliminateWhitespace = (str) => {
  const re = /\s/g;
  str = str.replace(re, '');
  return str;
};

const commonCharacters = (str1, str2) => {
  const uniqueCharacters = new Set();
  str1 = eliminateWhitespace(str1);
  str2 = eliminateWhitespace(str2);
  str1 = str1.split('');

  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i])) {
      uniqueCharacters.add(str1[i]);
    }
  }
  const commonLetters = Array.from(uniqueCharacters).join('');
  return commonLetters;
};

let str1 = 'acex ivou';
const str2 = 'aegihobu';
console.log(commonCharacters(str1, str2)); // --> 'aeiou'
