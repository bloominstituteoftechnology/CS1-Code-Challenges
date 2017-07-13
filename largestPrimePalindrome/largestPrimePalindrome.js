/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */

function largestPrimePal(top) {

  const rev = (n) => {
    let rev_n = '';
    for (s of n.toString()) rev_n = s + rev_n;
    return Number.parseInt(rev_n);
  }

  const isAPal = (n) => {
    return n === rev(n);
  }

  const isAPrimeNum = (n) => {
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  const isAPrimePal = (n) => {
    return isAPal(n) && isAPrimeNum(n);
  }

  let found;
  for (let num = 10; num < top; num++) {
    if (isAPrimePal(num)) found = num;
  }
  return found;
}

const top = 1000;
console.log(largestPrimePal(top));
