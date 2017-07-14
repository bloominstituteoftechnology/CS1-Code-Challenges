/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

 const tennisPlayers = ['Federer','Nadal', 'Tsonga', 'Djokovic', 'Wawrinka'];

const longestString = "";

function returnLongestString (tennisPlayers) {
   for(let i = 0; i < tennisPlayers.length; i++) {
     if (tennisPlayers[i].length > longestString) {
       longestString = tennisPlayers[i];
       return longestString;
     }
   }
 }
