/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

  const longestString = (array) => {
    let longest = array[0].length.
      for (let i = 1; i < array.length; i++) {
        if (array[i].length > longest.length) longest = array[i];
 	}
 	return longest;
 };