/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */

// Palindrome: compare from the firstElement[0] to the lastElement[1000]
// Find the largest palindrome up to 1000 and determine if its a prime
// Prime: Prime numbers are only divisible to itself and 1
// const string = 'posdfskljsfd';
function palindrome(number) {
  // NOT FINSIHED YET DONT REVIEW
  const numToString = number.toString();
  if (numToString.slice(-1) === numToString.charAt(0)) {
    return 'Match! Palindrome'
  } else {
    return "Sorry! Not a Palindrome"
  }
}
// }
console.log(palindrome(909));