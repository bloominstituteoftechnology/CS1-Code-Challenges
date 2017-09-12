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

// => {'0': '0', '1': '1', 'ABC': '2', 'DEF': '3', ... 'WXYZ': '9'}
const lettersToPhoneDigits = (() => {
  const entries = Object.entries(phoneDigitsToLetters);
  const obj = {};
  entries.forEach(e => {
    obj[e[1]] = e[0];
  });
  return obj;
})();

function telephoneWords(str) {

  // helper function 'digitArr'
  // Turns a string of numbers into an array of numbers
  // Input: String of Numbers
  // Output: Array of Numbers
  // '2345' => [2, 3, 4, 5]
  const digitArr = str.split('');

  // helper function 'numtoLetters'
  // Turns a number into an array of letters;
  // Input: Number
  // Output: Array of Characters (single Strings)
  // 2 => ['A', 'B', 'C']
  const numToLetters = (n) => {
    return phoneDigitsToLetters[n].split('');
  }

  const lettersToNum = (l) => {
    
  }

  // helper function 'permutator'
  // Given an array of items, returns all permutations of those items;
  // Input:  array of items to be permuted
  // Output: array of permutations
  // Example: 
  const permutator = (inputArr) => {
    let result = [];

    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
        }
      }
    }

    permute(inputArr)

    return result;
  }

  const combinor = (arrIn, arrOut) => {
    return ['ADGJ', 'BDGJ'];
  }

  /* ======================================================================= */

  // obtain an array of character arrays based upon the initial number
  const allLetters = digitArr.map(n => numToLetters(n));
  // '2345' => [['A','B',C'],['D','E','F',[...],[...]]

  // permute each of the arrays of numbers
  const allPermutedLetters = allLetters.map(set => permutator(set));
  // [[['A','B','C'],['A','C','B'],...],[['D','E','F'],[...],...],[[][]],...]]]

  //allPermutedLetters.forEach((g,i) => console.log(`[${i}]\n`, g));

  const result = combinor(allPermutedLetters, []);
  console.log(result);

  return result;
}

telephoneWords('2345');
