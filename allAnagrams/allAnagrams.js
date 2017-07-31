// Code Challenge # 16
/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array.

  * example usage:
  * const anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

// INPUT:    a string
// FUNCTION: return all possible combinations of letterss
// OUTPUT:   array of string permutations

// SOLUTION: slice off the first letter, swap the next two letters, recombine the swapped letters with the first letter... Hmmm...
              slice vs splice? slice doesn't change original, splice does.

*/

const allAnagrams = (str) => {
  x = []
  if (str.length === 0) {
    x.push(str);
    return x;
  };
  if (str.length === 1) {
    x.push(str);
    return `one character is already all anagram permutations: ${x}`;
  };
  if (str.length === 2 && str[0] != str [1]) {
    str[0] = str[1];
    str[1] = str[0];
    x.push(str);
    return `swapped: ${x}`;
  } else {
    x.push(str);
    return `there's nothing to do with: ${x}`;
  };
}

// TEST SUITE
// Empty string or one character
const emptyString = ''
console.log(allAnagrams(emptyString));
console.log(allAnagrams('a'));
// Two character string
console.log(allAnagrams('aa'));
console.log(allAnagrams('ab'));
