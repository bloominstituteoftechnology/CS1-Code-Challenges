/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */
const isPalindrome = (suspect) => {
  // checks to see if it's a palindrome
  // turns int to str, then splits into array of 1 letter characters
  // then reverses this array, and joins it back to a string
  // then turns this reversed string back into an int, and checks if the two are equal
  if (suspect === parseInt(suspect.toString().split('').reverse().join(''), 10)) return true;
    return false;
}

const isPrime = (suspect) => {
  for (let j = 2; j < suspect; j++) {
    if (suspect === 1) return false;
    if (suspect === 2 || suspect === 3) return true;
    if (suspect % j === 0 && suspect !== j) return false;
  }
}

const largestPP = (limit) => {
  const PParray = [];
  for (let i = 1; i < limit; i++) {
    if (isPalindrome(i) && isPrime(i)) PParray.push(i);
    console.log(PParray);
  }
  return PParray.pop();
}

console.log(largestPP(1000));