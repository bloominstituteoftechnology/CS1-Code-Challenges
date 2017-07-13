/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

 const reverse = (str) => {
   let flippedString = "";

   for (let i = str.length - 1; i >= 0; i--) {
     flippedString += str[i];
   }
   return flippedString;
 }

 console.log(reverse('ben'));
 console.log(reverse('Austen'));
