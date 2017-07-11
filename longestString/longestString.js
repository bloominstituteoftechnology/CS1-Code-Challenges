/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

const longestString = (arr) => {
  let tempWord = 'notAWord';
  let tempLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > tempLength) {
      tempWord = arr[i];
      tempLength = arr[i].length;
    }
  }
  return tempWord;
}


console.log(longestString(['one', 'seven', 'twenty-seven', 'hundred']));
