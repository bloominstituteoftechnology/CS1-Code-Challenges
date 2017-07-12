/* 
* Implement an algorithm to determine if a string has all unique characters.
* Extra Credit - Answer this question - What if you cannot use additional data structures?
*/

const isUnique = (str) => {
<<<<<<< HEAD
  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j < str.length; j++) {
        if (str[i] === str[j]) {
        return false;
        }
      }
    }
  return true;
};

=======

};
>>>>>>> 7e76d6a009f694cbab0659f84fdabd517aac089b

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false