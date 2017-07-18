/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */
// Function
const largestPP = () => {
  // Create isPrime function
  const isPrime = (num) => {
    let count = 0;
    for (let i = num; i > 0; i--) {
      if (num % i === 0) {
        count++;
      }
      if (count > 2) {
        return false;
      }
    }
    return true;
  }
  // For loop starting at 1000 and counting down
  for (let i = 1000; i > 10; i--) {
    // Set i to string
    let str = i.toString();
    // Reverse string
    let starr = str.split('');
    starr.reverse();
    let strev = starr.join('');
    // Check if palindrome
    if (str === strev) {
      // str back to number
      let pal = Number(str);
      // If str === revStr check if str is prime
      if (isPrime(pal)) {
        return pal;
      }
    }
  }
}

console.log(largestPP());