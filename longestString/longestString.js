/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

const longestString = (arr) => {
  let longest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    } 
  }
  return longest;
};

// console.log(longestString(["latoyya", "smith", "Lambda School", "mom"]));

// console.log(longestString(["latoyya", "asdfghj", "Lambda", "1234567"]));