/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */
 
const largestPrimePalindrome = () => {
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  for (let i = 1000; i >= 0; i--) {
    const numberArray = Array.from(i.toString()).map(Number);
    const first = 0;
    const last = numberArray.length - 1;
    if (numberArray[first] === numberArray[last]) {
      let palindrome = numberArray[last];
      let count = 1;
      for (let j = numberArray.length - 2; j >= 0; j--) {
        const numToAdd = numberArray[j] * (10 ** count);
        palindrome += numToAdd;
        count++;
      }
      if (isPrime(palindrome)) return palindrome;
    }
  }
};
