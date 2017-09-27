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

function checkString(str1, str2, str3) {
  let i = 0, j = 0, k = 0;

  // Must keep state for case of duplicate characters
  const initial_state = {
    str1: str1,
    i: i,
    str2: str2,
    j: j,
    str3: str3,
    k: k
  };

  // Use a cache of prior states to prevent infinite loop;
  // just holds the k value of states that have duplicate characters
  const state_cache = [];

  // Use a stack to hold states that need to be evaluated
  const state_arr = [initial_state];

  // Continue looking so long as there is state on the stack
  while (state_arr.length > 0) {
    // pop the next state to evaluate
    const state = state_arr.pop();
    let {str1, i, str2, j, str3, k} = state;

    while (k < str3.length) {
      const n = str3[k];

      // if a duplicate is found, place the state on the stack
      if (str1[i] === str2[j]) {
        // check if this state has already been found; skip if it has
        if (!state_cache.includes(k)) {
          state_arr.push({
            // Note: need to switch positions to test the second option
            str1: str2,
            i: j,
            str2: str1,
            j: i,
            str3: str3,
            k: k,
          });
          state_cache.push(k);
        }
      }

      if      (n === str1[i]) i++;
      else if (n === str2[j]) j++;
      // a false condition found, but continue looking in different states
      else if ( state_arr.length ) break;
      else return false;

      k++;
    }
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

console.log(checkString('abc', 'def', 'daebfc')); // true
console.log(checkString('abc', 'def', 'adbecf')); // true
console.log(checkString('abc', 'def', 'aaabbb')); // false

console.log(checkString('aaa', 'bbb', 'ababab')); // all are true
console.log(checkString('aaa', 'bbb', 'abbaab'));
console.log(checkString('aaa', 'bbb', 'aaabbb'));
console.log(checkString('aaa', 'bbb', 'abbbaa'));
console.log(checkString('aaa', 'bbb', 'bbbaaa'));
console.log(checkString('aaa', 'bbb', 'abbaab'));
console.log(checkString('def', 'dca', 'dcdaef'));
