/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */
 const reverseCase =  (str) => {
   const char = str.split('');
   char.forEach((char, i) => {
     if (char[i] > 64 && char[i] < 91) {
       char[i] = char[i] + 32;
     } else if (char[i] > 96 && char[i] < 123) {
       char[i] = char[i] - 32;
     } else if (char[i] === 32) {
       char[i] = ('');
     }
   });
   return char.join('');
 };

 console.log(reverseCase('Hello World'));
