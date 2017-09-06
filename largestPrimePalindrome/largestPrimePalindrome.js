/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */
largestPrimePalindromeLessThan = (number) => {
  for (let i = number; i > 0; i--) {
    if (isPalindrome(i) === true && factorsList(i).length === 2) {
      return i;
    }
  }
  return ('No prime smaller than input');
}
isPalindrome = (number) => {
  for (let x = number; x >= 0; x--) {
    if (String(x) === String(x).split('').reverse('').join('')) {
      //console.log(number);
      return true;
    }
  return false;
  }
}
factorsList = (number) => {
  factors = [];
  for (let j = number; j > 0; j--) {
    if ((number % j) === 0) {
      factors.push(j);
    }
  }
  //console.log(factors);
  return factors;
}

console.log(largestPrimePalindromeLessThan(1000));
