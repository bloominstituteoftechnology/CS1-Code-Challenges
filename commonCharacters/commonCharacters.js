/**
 * Common Characters: 
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. * 
 * Your function should return the common characters in the same order that they appear in the first argument. 
 * Do not return duplicate characters and ignore whitespace in your returned string.  * 
 * Example: commonCharacters('acexivou', 'aegihobu')  * 
 * Returns: 'aeiou'
*/

const commonCharacters = (str1, str2) => {
  let str = '';

  const str1Arr = str1.split('');
  let char;
  while( str1Arr.length ) {
    char = str1Arr.shift();
    if (!(char === '\040' || str.includes(char))) { // ignore spaces and duplicates
      if(str2.includes(char)) {
        str += char;
      }
    }
  }

  return str;
}

/***********************************************************************/

const str1 = 'acex ivou';
const str2 = 'aegi hobu';
const solution = commonCharacters(str1, str2);
console.log(`str1: ${str1}\nstr2: ${str2}\nsolution: ${solution}`);
