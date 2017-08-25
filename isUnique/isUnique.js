/* 
* Implement an algorithm to determine if a string has all unique characters.
* Extra Credit - Answer this question - What if you cannot use additional data structures?
*/

const isUnique = (str) => {
  let tempStr = {};
  for (let i = 0; i < str.length; ++i) {
    const res = str[i];
    if (tempStr[res])
      return false;
    else
      tempStr[res] = true;
    }
    return true;
};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false