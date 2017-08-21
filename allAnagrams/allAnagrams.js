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

  function allAnagrams(string) {
    const results = []; 
    if (string.length < 2) {
      return string;
    }
    for (let i = 0; i < string.length; i++) {
      let firstChar = string[i];
      let charsLeft = string.substring(0, i) + string.substring(i + 1);
      let inner = allAnagrams(charsLeft);
      for (let j = 0; j < inner.length; j++) {
        results.push(firstChar + inner[j]);
      }
    }
    return results;
  } 