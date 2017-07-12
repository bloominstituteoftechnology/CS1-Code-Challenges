/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

const longestString = (strArr)  => {
  len = '';
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > len.length) {
      len = strArr[i];
    }
  }
  return len;
}

starr = ['evan', 'james', 'howard', 'ed'];

console.log(longestString(starr));