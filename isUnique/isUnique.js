/*
* Implement an algorithm to determine if a string has all unique characters.
* Extra Credit - Answer this question - What if you cannot use additional data structures?
*/

// general outline. Sort the array so that duplicate chars are next to each other. loop
//  over the string and check if the following array item is equal to the current one. If so
// it's not unique, return false otherwise true;
const isUnique = (str) => {
  //convert the string to an array so that we can use array methods to work throug it
   const arrayString = str.split('');
   arrayString.sort();
   console.log(arrayString);

   for (var i = 0; i < arrayString.length -1; i++) {
     if (arrayString[i] == arrayString[i + 1]) {
       return false;
     }
   }

// otherwise return true
return true;

};

//console.log(isUnique('abcdhijklmnopqrstuv')); // true
//console.log(isUnique('abcdefga')); // false
console.log(isUnique('abjklztc'));

// todos use a forEach and pass it in an arrow function that does the array checking

//get this algorithm to work , even though it's clumsier. outler loop . start with the first char and inner loop
//compare with each of the elements. check that if you find a match it's not matching to itself. if you find a match
//return false otherwise return true
/*
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
*/
