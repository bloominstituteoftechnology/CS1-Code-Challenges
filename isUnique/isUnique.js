<<<<<<< HEAD
/*
=======
/* 
>>>>>>> 7e76d6a009f694cbab0659f84fdabd517aac089b
* Implement an algorithm to determine if a string has all unique characters.
* Extra Credit - Answer this question - What if you cannot use additional data structures?
*/

const isUnique = (str) => {
<<<<<<< HEAD
  // i know technically it is the word being split but the variable name helps me break it down in my head
  let currentLetterToCompare = str.split("");
  for (let i = 0; i < str.length; i++) {

  // console.log("currentLetterToCompare: ", currentLetterToCompare[i]);

   let restOfTheStringToCompare = str.split("");
   // This inner loop needs to stay one letter ahead of i (the current letter being compared against)
   for(let j = i+1; j < str.length; j++) {

    // console.log("Rest of string: ", restOfTheStringToCompare[j]);

     if (currentLetterToCompare[i] === restOfTheStringToCompare[j]) {
       return false;
     }
   }
 }
return true;
};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false
=======

};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false
>>>>>>> 7e76d6a009f694cbab0659f84fdabd517aac089b
