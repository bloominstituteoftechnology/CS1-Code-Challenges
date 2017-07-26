/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */

 // general outline of a solution convert the string to an array to make it easier to loop over and use array
 // functions .  loop over the string starting at num 1000 and decrementing
 //use array.reverse to reverse the array and then array.join to convert it again to a string. compare the resulting
 //string to see if they are equal to the loop value, if so it's a palindrome , set palindrome to true.
 // now check to see if it's a prime number . if it is
//  return the number other wise go down checking to zero
 //and if nothing is found return 'nothing found'


 const largestPrimePlaindrome = num => {
    for (let i=num; i > 0; i--)  {
     const arrStr = i.toString().split('');
     //reverse the string and check if they are the same (palindromes)
     const reversedArr = arrStr.slice().reverse(); //.slce() creates a new array
     // now you have the arrNumber and reversedArr check to see if they are equal
     let isPalindrome = true;
     let isPrimeNum = true;
     // check for palindrome
     arrStr.forEach((char, i) => {
       if (arrStr[i] !== reversedArr[i]) {
          isPalindrome = false;
       }
     });
     //
     let divisor = i - 1;
     if (isPalindrome == true) {
       while(divisor > 1) {
         if (i % divisor === 0 ) {
          isPrimeNum = false;
         }
        divisor--;
       }
     }


     if (isPrimeNum && isPalindrome) {
       return i;
     }
   }

 };

 console.log(largestPrimePlaindrome(930));
