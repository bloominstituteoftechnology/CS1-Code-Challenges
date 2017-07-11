/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

 const longestString = (arrayToSearch) => {
   let longest = 0;

   for (let i = 0; i < arrayToSearch.length; i++) {
     if (arrayToSearch[i]).length > longest) {
       longest = arrayToSearch[i].length;
     }
     return longest;
   }
 }

arrayStrings = ["hello", "hola", "Javascript"];

console.log(longestString(arrayStrings));
