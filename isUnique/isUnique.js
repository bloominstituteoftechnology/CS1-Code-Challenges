/*
 * Implement an algorithm to determine if a string has all unique characters.
 * Extra Credit - Answer this question - What if you cannot use additional data structures?
 */

const isUnique = (str) => {
  for (let i = 0; i < str.length; i++) {
    let temp = str[i];
    for (let j = 1; j < str.length; j++) {
      if(temp === str[j]) {
        return false;
      }
    }
  return true;
  }
};


console.log(isUnique('abcdhijklmnopqrstu')); //true
console.log(isUnique('abcdefga')); //false

