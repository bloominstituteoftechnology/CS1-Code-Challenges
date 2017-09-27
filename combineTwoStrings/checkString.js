/* 
checkString.js

Given three strings, str1, str2, str3. str3 is said to be a shuffle of
str1 and  str2 if it can  be formed by interleaving  the characters of
str1  and str2  in  such a  manner  that it  maintains  left to  right
ordering from each string. Given str1 = 'abc' and str2 = 'def', str3 =
'dabecf' is a valid shuffle  since it preserves the character ordering
of the two strings.

So, given these  three strings, write a function  that detects whether
str3 is a valid shuffle of str1 and str2.

   NOTE: This version uses a stack of states to correctly evaluate the
   edge case  in which str1  and str2  have duplicate characters  at a
   particular point.  When  duplicates are found, the  state is placed
   on  the stack,  and  k is  placed  into a  cache.   If the  current
   evaluation returns  false, but there  are more states  to evaluate,
   then the  program will pop  the next state and  continue evaluating
   from that point.  If duplicates are  found, but the current k value
   is in  the cache,  then this duplicate  has already  been evaluated
   once, and it is ignored.

   The  recursive solution  handles evaluating  these duplicates  in a
   much  more elegant  and  simple fashion  because recursion  handles
   stacks of state automatically and behind-the-scenes.
 */

function checkString(str1, str2, str3) {
  let i = 0, j = 0, k = 0;

  const initial_state = {
    str1: str1,
    i: i,
    str2: str2,
    j: j,
    str3: str3,
    k: k
  };
  const state_cache = [];
  const state_arr = [initial_state];

  while (state_arr.length > 0) {
    const state = state_arr.pop();
    let {str1, i, str2, j, str3, k} = state;

    while (k < str3.length) {
      const n = str3[k];

      if (str1[i] === str2[j]) {
        if (!state_cache.includes(k)) {
          state_arr.push({
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
