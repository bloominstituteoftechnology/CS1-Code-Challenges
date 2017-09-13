/* 
 * twinPrime.js
 *
 * A twin prime is a prime number that differs from another prime number by
 * two. Write a function called isTwinPrime which takes an integer and
 * returns true if it is a twin prime, or false if it is not.

 * Example:

 * 5 is a prime, and 5 + 2 = 7, which is also a prime, so returns true.
 * 9 is not a prime, and so does not need checking, so it returns false.
 * 7 is a prime, but 7 + 2 = 9, which is not a prime. However, 7 - 2 = 5,
 * which is a prime, so it returns true.

 */

function isTwinPrime(n) {

  const isPrime = (p) => {
    if (p === 2)
      return true;
    if (p === 3)
      return true;
    if (p % 2 === 0)
      return false;
    if (p % 3 === 0)
      return false;

    let i = 5
    let w = 2
    const sqrtP = Math.sqrt(p);

    while (i <= sqrtP) {
      if (p % i === 0)
        return false;

      i += w;
      w = 6 - w;
    }

    return true;
  }

  return (isPrime(n) && (isPrime(n-2) || isPrime(n+2)));
}

