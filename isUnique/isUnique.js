/*
* Implement an algorithm to determine if a string has all unique characters.
* Extra Credit - Answer this question - What if you cannot use additional data structures?
*/

const isUnique = (str) => {
  //convert the string to an array so that we can use array methods to work throug it
   const arrayString = str.split('');
  //console.log(arrayString);
 // loop through the array for each char and get each char and index
 arrayString.forEach(function(char, index1)  {
     // for each character check through  the array (a second loop) if the character  & if it's index array index
     // do not match, return false
      //console.log(char, index1);
      arrayString.forEach (function (char2, index2) {
         console.log(char, index1);
         console.log(char2, index2);
         if (char === char2 && index1 != index2)  // something is broken here , i get true all the tiem,
              //if you could point it out i'd be greatful
         return false
      })
 })



// otherwise return true
return true;

};

//console.log(isUnique('abcdhijklmnopqrstuv')); // true
//console.log(isUnique('abcdefga')); // false
console.log(isUnique('abb'));
