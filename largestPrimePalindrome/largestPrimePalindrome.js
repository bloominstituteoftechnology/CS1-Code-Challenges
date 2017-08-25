/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */
const largestPrimePalindrome = () => {
  const checkPalindrome = (number) => {
    const str = number.toString();
    const revstr = str.split('').reverse().join('');
    if (str === revstr) return true;
  };
  const checkPrime = (num) => {
    const squareRoot = Math.sqrt(num);
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < squareRoot; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let num = 1000; num >= 11; num--){
    if (checkPalindrome(num) && checkPrime(num)) return num;
  }

};

console.log(largestPrimePalindrome());
