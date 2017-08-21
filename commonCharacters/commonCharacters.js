/**
 * Common Characters: 
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. * 
 * Your function should return the common characters in the same order that they appear in the first argument. 
 * Do not return duplicate characters and ignore whitespace in your returned string.  * 
 * Example: commonCharacters('acexivou', 'aegihobu')  * 
 * Returns: 'aeiou'
*/

const commonCharacters = (str1, str2) => {
  let answerSet = new Set();
  let tempSet = new Set();
  for (let i = 0; i < str2.length; i++) {
    tempSet.add(str2[i]);
  }
  for (let i = 0; i < str1.length; i++) {
    if (tempSet.has(str1[i])) {
      answerSet.add(str1[i]);
    }
  }
  return answerSet;
};
