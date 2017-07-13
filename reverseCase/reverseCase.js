/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

 // high level solution overview. Convert string to array so you can loop over it. Loop over it and
 // each time check if the char === char.toUppderCase() if so convert it to lower case and add it to new array.
 // otherwise it's lowercase, uppercase it and add to string.
 // return string.

 const stringReverse = str => {
   //str to array
   const arrayString = str.split('');
   //console.log(arrayString);
   resultStr = '';
   for (var i = 0; i < arrayString.length; i++) {
     // if the char is uppercase switch to lowecase and add to string otherwise toLowercase and add to string
     if (arrayString[i] == arrayString[i].toUpperCase()) {
       resultStr = resultStr + arrayString[i].toLowerCase();
     } else {
       resultStr = resultStr + arrayString[i].toUpperCase();
     }
   }
   return (console.log(resultStr));
   return resultStr;

 };

 stringReverse('Hello World');



 /*
Tai the Thai's code
const reverseCase = (str) => {
  const chars = str.split(''); // ['H', 'e', ... , 'd']
  const arr = [];
  chars.forEach((letter, i) => {
    (letter.toUpperCase() === letter) ? arr[i] = (letter.toLowerCase()) : arr[i] = (letter.toUpperCase());
  });
  return arr.join('');
}

str1 = 'Hello World';

console.log(reverseCase(str1));
 */
