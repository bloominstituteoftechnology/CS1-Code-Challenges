/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) { // <--- make sure divided by 2 handles odd and even length (floor vs. ceiling)
    if (str[i] === str[-1 - i]) {
      retrun true;
    } else {
      return false;
    }
  }
}

function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers

  // if (num < 2) {return false;}
  // else if (num === 2) {return true;}
  // else if (num % 2 === 0) {return false;}
  // else if (num >= 3) {
  //   for (var i = 2; i < (num * .5); i++) {
  //     if (num % i === 0) {
  //       return false;
  //     }
  //   }
  // } return true;

  if (num < 2) {
    return false;
  }
  for (var i = 2; i <= num; i++) {
    if ( num % i == 0 && i != num) {
      return false;
    } else {
      return true;
    }
  }
}
