/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */

function largestPrimePal(top) {

  // Sieve of Eratosthenes

  // fill each array slot with a number
  const arr = Array.from({length: top}, (v, i) => i);

  // remove non-prime numbers by turning the array slot to zero
  // using the algorithm: Sieve of Eratosthenes
  for (let i = 2; i < Math.sqrt(top); i++) {
    if (arr[i] !== false) {
      const f = i * i;
      let j = 0;
      while (f + j * i < top) {
        arr[f + j++ * i] = 0;
      }
    };
  }

  // reverse a number
  const rev = (n) => {
    let rev_n = '';
    for (s of n.toString()) rev_n = s + rev_n;
    return Number.parseInt(rev_n);
  }

  // return true if a number is a palindrome
  const isAPal = (n) => {
    return n === rev(n);
  }

  // check all prime numbers to see if they are palindromes; return the last one found
  let found;
  return arr.forEach((elem) => { if (elem > 0 && isAPal(elem)) found = elem; }), found;
}

const top = 1000;
console.log(largestPrimePal(top));
