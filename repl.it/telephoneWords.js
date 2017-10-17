/* 
 * telephoneWords.js
 * 
 * Each number key on a standard phone keypad has a set of Latin letters
 * written on it as well:
 * http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
 * Businesses often try to come up with clever ways to spell out their phone
 * number in advertisements  to make it more memorable. But  there are a lot
 * of combinations!   Write a  function that  takes up to  four digits  of a
 * phone number, and returns  a list of all of the  words that can bewritten
 * on the phone  with that number. (You should return  all permutations, not
 * only English words.)
 *
 * Tips:
   - Phone numbers are strings! (A phone number can start with a zero.)
   - The digits 0 and 1 do not have letters associated with them, so they
     should be left as numbers.
   - Don't return every combination of those digits in any order, just the
     order given.
*/

const phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

function telephoneWords(str) {
  const solution = [];

  // input:  array of 3-letter strings; and
  // input:  word being build
  // output: none; complete words added to solution array
  const recursiveHelper = (arr, word) => {
    // base case: add word to solution and return
    if (arr.length === 0) return solution.push(word);

    // recurse with smaller array after adding letter to word
    for (let c of arr[0]) {
      recursiveHelper(arr.slice(1), word + c);
    }
  };

  // create an array of 3-letter strings
  const arrOfStr = str.split('').map(n => phoneDigitsToLetters[n]);

  // begin recursion with full array and empty word
  recursiveHelper(arrOfStr, '');
  return solution;
}

console.log(telephoneWords('2745'));
