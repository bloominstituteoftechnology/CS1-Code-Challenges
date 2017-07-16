/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */
 largestPrimePalindrome = (limit) => {
   const isPrime = (number) => {
     // If n is less than 2 it cannot be prime.
    if (number < 2) return false;
    var isPrime = true;
    // check number from 2 to the square root of number, if any of these
    // divides number exactly then number is not prime
    for (var i = 2; i <= Math.sqrt(number); i++) {
       if (number % i == 0) isPrime = false;
    }
    return isPrime;
  }
  const isPalindrome = (number) => {
    const numberStr = number.toString()
    const reversedNumber = numberStr.split('').reverse().join('');
    if (reversedNumber === numberStr) return true;
    return false;
  }
  for (let i = limit; i >= 11; i--) {
    if (isPrime(i) && isPalindrome(i)) return i;
  }
 }

console.log(largestPrimePalindrome(1000));
