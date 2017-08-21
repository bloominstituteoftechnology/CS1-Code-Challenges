/**
 * Common Characters: 
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. * 
 * Your function should return the common characters in the same order that they appear in the first argument. 
 * Do not return duplicate characters and ignore whitespace in your returned string.  * 
 * Example: commonCharacters('acexivou', 'aegihobu')  * 
 * Returns: 'aeiou'
*/

const commonCharacters = (str1, str2) => {
  let tempSet = new Set();
  let ansStr = '';
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] !== ' ') {
      tempSet.add(str2[i]);
    }
  }
  for (let i = 0; i < str1.length; i++) {
    if (tempSet.has(str1[i])) {
      ansStr += str1[i];
    }
  }
  return ansStr;
};
