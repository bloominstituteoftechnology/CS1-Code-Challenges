/* 
* Implement an algorithm to determine if a string has all unique characters.
* Extra Credit - Answer this question - What if you cannot use additional data structures?
*/

const isUnique = (str) => {
  const tester = str.split("").sort();
  let check = true;
  for (let i = 1; i < tester.length; i++) {
    if (tester[i] === tester[i-1]) check = false;
  }
  return check;

};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false