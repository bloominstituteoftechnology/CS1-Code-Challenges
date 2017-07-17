/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

 // Count the letters in each array element
 // Count the number of words in an array
 // compare the letterCount to Words in Array
let array = ['hi', 'hello', 'welcome'];
let length = 0;
let longest;

for (let i = 0; i < array.length; i++) {
	if (array[i].length > length) {
    let length = array[i].length;
    longest = array[i];
  }
}
console.log(longest);