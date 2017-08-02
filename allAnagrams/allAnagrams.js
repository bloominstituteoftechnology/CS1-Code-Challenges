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

  // thoughts. probably going to split that string up into single characters.
  // maybe use set to get rid of dupes
  // permutations, but i dunno how to write this
  // time complexity of n!, which is actually the worst
  // recursion? I have to stop attempting making everything with recursion.
  // legit first thought was recursion. stahpw
  // can stop after string gets completely reversed(maybe multiple of same character might break this)


  const allAnagrams = (word) => {
    arr = [word];
    if (word.length < 2) return arr;
    splitChars = word.split('');
    const recurseAnagrams = () => {
      for (let i = 0; i < splitChars.length; i++) {

      } 
    }
    return arr;
  }
