/* 
* Implement an algorithm to determine if a string has all unique characters.
* Extra Credit - Answer this question - What if you cannot use additional data structures?
*/

const isUnique = (str) => {
  const set = new Set();
  const check = (pos = 0) => {
    if (pos === str.length) return true;
    const s = str[pos];
    if (set.has(s)) return false;
    set.add(s);
    return check(++pos);
  }
  return check();
};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false
