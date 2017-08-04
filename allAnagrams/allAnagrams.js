/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array.
 */

/**
  * example usage:
  * const anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */
    const allAnagrams = (word) => {
     let arr = [];
     for(let i = 0; i < word.length; i++) {
       for(let j = word.length; j>0; j--) {
         let cur = word.substring(i, i + 1);
         let before = word.substring(0, i);
         let after = word.substring(i + 1);
         console.log( cur+before + after);
       }
      }
  }
  const anagrams = allAnagrams('abc');
