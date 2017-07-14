/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */

function isPalindrome(str) {
  // return true if string is a palindrome.
  // otherwise return false
  for (let i = 0; i < str.length / 2; i++) { // <--- make sure divided by 2 handles odd and even length (floor vs. ceiling)
    if (str[i] === str[-1 - i]) {
      retrun true;
    } else {
      return false;
    }
  }
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  if (num < 2) {
    return false;
  }
  for (var i = 2; i <= num; i++) { // <-- i < num/2 or Math.sqrt(num) for speed
    if ( num % i == 0 && i != num) {
      return false;
    } else {
      return true;
    }
  }
}
