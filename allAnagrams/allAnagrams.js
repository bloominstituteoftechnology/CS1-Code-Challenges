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

// After looking at brute solutions, it seems there is a factorial operation going on here such that a string of 5 characters would have 5! solutions...
// hmmm!
*/

const allAnagrams = (str) => {
  arr = str.split('');



  return str, arr;
}

// const allAnagrams = (str) => {
//   x = []
//   if (str.length === 0) {
//     x.push(str);
//     return x;
//   };
//   if (str.length === 1) {
//     x.push(str);
//     return `one character is already all anagram permutations: ${x}`;
//   };
//   if (str.length === 2 && str[0] != str [1]) {
//     str[0] = str[1];
//     str[1] = str[0];
//     x.push(str);
//     return `I took your ${str} and swapped it: ${x}`; // <--- oh, ha... yeah...
//   } else {
//     x.push(str);
//     return `there's nothing to do with: ${x}`;
//   };
// }

// TEST SUITE
// Empty string
const emptyString = ''
console.log(allAnagrams(emptyString));
// One character
console.log(allAnagrams('a'));
// Two character string
console.log(allAnagrams('aa'));
console.log(allAnagrams('ab'));


// FACTORIAL
const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`

  // // version 1 √
  if (n === 1) return n;
  return n * nFactorial(n - 1);

  // // version 2: ternary solution √
  // // declare variableName = ifCondition ? thenThis : otherwiseThat;
  // const factorial = (n === 1) ? 1 : n * nFactorial(n - 1);
  // return factorial;

  // // version 2.1 √
  // return (n === 1) ? n : n * nFactorial(n - 1);
};
