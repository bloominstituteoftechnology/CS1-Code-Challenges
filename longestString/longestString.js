/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

 // using this article from fresh memory but not a straight copy passwordToCompare
 // https://medium.freecodecamp.org/before-you-code-remember-to-prep-for-your-coding-interview-2ccfb58147db

 function longestString (stringArray) {
   // Use a variable to keep track of the longest word so far.
   var longestSentenceSoFar = "";



   // Loop through each of the words.
   for (var i = 0; i < stringArray.length; i++) {
     // If the length of the current word is greater than the longest
     // so far, update our variable tracking the longest word.
     if (stringArray[i].length > longestSentenceSoFar.length) {
       longestSentenceSoFar = stringArray[i];
     }
   }



   // After we've looked at every word, return the tracking variable.
   return longestSentenceSoFar;
 }

 console.log(longestString(['c', 'dd', 'blabla']));
