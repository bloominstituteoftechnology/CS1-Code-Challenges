/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */

// returns largest prime palindrome
const largestPrimePalindrome = function(num) {
  return findPrimePals(findPrimes(num))[-1] // <--- JS doesn't support -1 as array tail :()
}

// evaluates a range of natural numbers
// I: largest number in range (inclusive)
// O; an array of ALL prime #'s from range 0 thru input integer
const findPrimes = function(*num) {
  const primes = [];
  for number in range 0 thru *num
    if (**isPrime(*num)), then add to *primes
  return *primes;
  }

// const findLargestPrime = function(*arrOfPrimes, e.g. findPrimes(###)) {
//   return (*arrOfPrimes[*arrOfPrimes - 1]) // <--- last item in array will be largest prime
// }

// I: a sorted array of prime numbers, smallest to largest
// O: array of prime Palindromes
const findPrimePals = function(*anArrOfPrimes, e.g. findPrimes(###)) {
  const primePals = []
  for (i=0;i<anArrOfPrimes.length;i++) {
    if (**isPalindrome(anArrOfPrimes[i])) primePals.push(anArrOfPrimes[i])
  }
  return primePals;
}

const isPrime = function(num) {
  // return true if num is prime.
  // otherwise return false
  if (num < 2) {return false;}
  else if (num === 2) {return true;}
  else if (num % 2 === 0) {return false;}
  else if (num >= 3) {
    for (var i = 2; i < Math.sqrt(num + 1); i++) { // Maybe a ceiling would work better (but slower?)?
      if (num % i === 0) {
        return false;
      }
    }
  } return true;
}

const isPalindrome = function(str) {
  // return true if string is a palindrome.
  // otherwise return false
  for (let i = 0; i < str.length / 2; i++) { // <--- make sure divided by 2 handles odd and even length (floor vs. ceiling)
    if (str[i] === str[str.length - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
}
// PALINDROME TEST SUITE
console.log(`Q: Is 'palindrome' a palindrome?            A: ${isPalindrome('palindrome')}`) // <-- false
console.log(`Q: Is ' ' a palindrome?                     A: ${isPalindrome(' ')}`) // <-- true
console.log(`Q: Is 'a' a palindrome?                     A: ${isPalindrome('a')}`) // <-- true
console.log(`Q: Is 'bb' a palindrome?                    A: ${isPalindrome('bb')}`) // <-- true
console.log(`Q: Is 'cdc' a palindrome?                   A: ${isPalindrome('cdc')}`) // <-- true
console.log(`Q: Is 'amanaplanacanalpanama' a palindrome? A: ${isPalindrome('amanaplanacanalpanama')}`) // <-- true
// PRIME TEST SUITE
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
console.log(`Q:      0 is prime? A: ${isPrime(0)}`)     // <--- false
console.log(`Q:      1 is prime? A: ${isPrime(1)}`)     // <--- false
console.log(`Q:      2 is prime? A: ${isPrime(2)}`)     // <--- true
console.log(`Q:      3 is prime? A: ${isPrime(3)}`)     // <--- true
console.log(`Q:      4 is prime? A: ${isPrime(4)}`)     // <--- false
console.log(`Q:      5 is prime? A: ${isPrime(5)}`)     // <--- true
console.log(`Q:      6 is prime? A: ${isPrime(6)}`)     // <--- false
console.log(`Q:      7 is prime? A: ${isPrime(7)}`)     // <--- true
console.log(`Q:      8 is prime? A: ${isPrime(8)}`)     // <--- false
console.log(`Q:      9 is prime? A: ${isPrime(9)}`)     // <--- false
console.log(`Q:     10 is prime? A: ${isPrime(10)}`)    // <--- false
console.log(`Q:     11 is prime? A: ${isPrime(11)}`)    // <--- true
console.log(`Q:     12 is prime? A: ${isPrime(12)}`)    // <--- false
console.log(`Q:     13 is prime? A: ${isPrime(13)}`)    // <--- true
console.log(`Q:    121 is prime? A: ${isPrime(121)}`)   // <--- false (11 * 11 = 121)
console.log(`Q: 104729 is prime? A: ${isPrime(104729)}`)// <--- true (104,729 is the 10,000th prime number!)
