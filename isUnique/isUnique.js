<<<<<<< HEAD
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

=======
/* 
* Implement an algorithm to determine if a string has all unique characters.
* Extra Credit - Answer this question - What if you cannot use additional data structures?
*/

const isUnique = (str) => {

};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false
>>>>>>> 7e76d6a009f694cbab0659f84fdabd517aac089b
