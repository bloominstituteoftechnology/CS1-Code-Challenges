/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */

const largestPrimePalindrome = () => {
  
  const isPalindrome = num => {
      return num == num.toString().split('').reverse().join('');
   };
  
  const isPrime = num => {
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  };
  
  for (let i = 920; i < 1000; i++) {
    if (isPalindrome(i) && isPrime(i)) {
      return i;
    } 
  }
}
console.log(largestPrimePalindrome());