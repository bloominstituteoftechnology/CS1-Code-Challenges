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

  let allAnagrams = (word, anagram = '', anagrams = []) => {
    if(!word) {
      anagrams.push(anagram);
      return;
    }
    for (let i = 0; i < word.length; i++) {
      anagram += word[i];
      allAnagrams(word.slice(0, i) + word.slice(i + 1), anagram, anagrams);
      anagram = anagram.slice(0, anagram.length - 1);
    }
    return [...new Set(anagrams)];
  };


  console.log(allAnagrams('abc')); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  console.log(allAnagrams('ab'));  // [ 'ab', 'ba' ]
  console.log(allAnagrams('1234')); // [ '1234','1243','1324', '1342', '1423', '1432', '2134', '2143', '2314', '2341',
  //'2413', '2431', '3124', '3142', '3214', '3241', '3412', '3421', '4123', '4132', '4213', '4231', '4312', '4321' ]

  // input! - factorial