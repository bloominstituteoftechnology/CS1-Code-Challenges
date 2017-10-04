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

  const allAnagrams = (str, start = '') => {
  if (str.length === 1) return [start + str];
  const anagrams = [];

  for (let i = 0; i < str.length; i++) {
    const result = allAnagrams(str.substr(0, i) + str.substr(i + 1), str[i]);
    for (let j = 0; j < result.length; j++) {
      anagrams.push(start + result[j]);
    }
  }
  return anagrams;
};
