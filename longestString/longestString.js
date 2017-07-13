/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */
 const longestStr = (str) => {
   let longest = str[0];
   str.forEach(word => {
     if (longest.length < word.length) longest = word;
    });
   return longest;
 }
const arr = ['hello', 'iamthe longest', 'thelongest'];
console.log(longestStr(arr));
