/* 
* Implement an algorithm to determine if a string has all unique characters.
* Extra Credit - Answer this question - What if you cannot use additional data structures?
*/

const isUnique = (str) => {
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    let comp = arr[i];
    for (let j = i++; j < arr.length; j++) {
      if (arr[i] === arr[j]) return false;
    }
  }
  return true;
};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false