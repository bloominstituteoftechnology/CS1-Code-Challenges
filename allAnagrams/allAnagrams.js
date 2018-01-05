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

const allAnagrams = (str) => {
  const combos = [];
  combos.push(str);
  const strArr = Array.from(str);
  let length = str.length;
  if (length < 2) {
    return str;
  } else if (length === 2) {
    strArr[0] = strArr[1];
    strArr[1] = str[0];
    combos.push(strArr.join(''));
    return combos;
  } else {
    for (i = str.length - 1; i >= 1; i--) {
      console.log(strArr);
      const tempLetter = strArr[i];
      console.log('tempLetter is ' + tempLetter + ' at i: ' + i);
      strArr[i] = strArr[i - 1];
      strArr[i - 1] = tempLetter;
      console.log('new arr: ' + strArr);
      combos.push(strArr.join(''));
    }
  }
  return combos;
};
