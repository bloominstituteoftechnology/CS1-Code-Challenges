/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */
const isPrime = (num) => {
  if (num === 2) return true;
  for(let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}

const reverseNumber = (num) => {
    let stringy = `${num}`;
    return parseInt(stringy.split("").reverse().join(""));
}

const largestPrimePalindrome = (num) => {
    for(let i = num; i > 0; i--){
        if(isPrime(i) && i === reverseNumber(i)) return i;
    }
    return false;
}

console.log(largestPrimePalindrome(1000));