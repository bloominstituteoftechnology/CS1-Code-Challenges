/* 
checkString.js

Given three strings, str1, str2, str3. str3 is said to be a shuffle of str1
/* and str2 if it can be formed by interleaving the characters of str1 and
/* str2 in such a manner that it maintains left to right ordering from each
/* string. Given str1 = 'abc' and str2 = 'def', str3 = 'dabecf' is a valid
/* shuffle since it preserves the character ordering of the two strings. 

So, given these three strings, write a function that detects whether str3 is
a valid shuffle of str1 and str2.

*/

// NOTE: this fails the final test when two identical characters are in each
// string; the recursive solutions passes this test.
function checkString(str1, str2, str3) {
  let i = 0, j = 0, k = 0;

  while (k < str3.length) {
    const n = str3[k];

    if      (n === str2[j]) j++;
    else if (n === str1[i]) i++;
    else return false;

    k++;
  }
  return true;
}

function checkString_recursive (str1, str2, str3) {
  if (str3.length === 0) return true;
  if ((str1.length + str2.length) !== str3.length) return false;
  const shorterStr3 = str3.substr(1);
  if (str1[0] === str3[0]) {
    if (str2[0] === str3[0]) {
      return  checkString_recursive(str1, str2.substr(1), shorterStr3) || checkString_recursive(str1.substr(1), str2, shorterStr3)
    }
    return checkString_recursive(str1.substr(1), str2, shorterStr3);
  }
  if (str2[0] === str3[0]) {
    return checkString_recursive(str1, str2.substr(1), shorterStr3);
  }
  return false;
}

// console.log(checkString('abc', 'def', 'daebfc'));
// console.log(checkString('abc', 'def', 'adbecf'));
// console.log(checkString('abc', 'def', 'aaabbb'));

console.log(checkString('aaa', 'bbb', 'ababab'));
console.log(checkString('aaa', 'bbb', 'abbaab'));
console.log(checkString('aaa', 'bbb', 'aaabbb'));
console.log(checkString('aaa', 'bbb', 'abbbaa'));
console.log(checkString('aaa', 'bbb', 'bbbaaa'));
console.log(checkString('aaa', 'bbb', 'abbaab'));
console.log(checkString('def', 'dca', 'dcdaef'));
