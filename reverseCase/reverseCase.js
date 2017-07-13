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

 stringReverse('flaA');

 // not exactly sure why i have to do a return (console log()); would have thought the return would have done ...
