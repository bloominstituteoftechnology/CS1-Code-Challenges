/* return true if num is prime.
   otherwise return false */

const isPrime = function(num) {
  if (num < 2) {return false;}
  else if (num === 2) {return true;}
  else if (num % 2 === 0) {return false;}
  else if (num >= 3) {
    for (var i = 2; i < Math.sqrt(num + 1); i++) { // Maybe a ceiling would work better (but slower?)?
      if (num % i === 0) {
        return false;
      }
    }
  } return true;
}

// PRIME TEST SUITE
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
console.log(`Q:      0 is prime? A: ${isPrime(0)}`)     // <--- false
console.log(`Q:      1 is prime? A: ${isPrime(1)}`)     // <--- false
console.log(`Q:      2 is prime? A: ${isPrime(2)}`)     // <--- true
console.log(`Q:      3 is prime? A: ${isPrime(3)}`)     // <--- true
console.log(`Q:      4 is prime? A: ${isPrime(4)}`)     // <--- false
console.log(`Q:      5 is prime? A: ${isPrime(5)}`)     // <--- true
console.log(`Q:      6 is prime? A: ${isPrime(6)}`)     // <--- false
console.log(`Q:      7 is prime? A: ${isPrime(7)}`)     // <--- true
console.log(`Q:      8 is prime? A: ${isPrime(8)}`)     // <--- false
console.log(`Q:      9 is prime? A: ${isPrime(9)}`)     // <--- false
console.log(`Q:     10 is prime? A: ${isPrime(10)}`)    // <--- false
console.log(`Q:     11 is prime? A: ${isPrime(11)}`)    // <--- true
console.log(`Q:     12 is prime? A: ${isPrime(12)}`)    // <--- false
console.log(`Q:     13 is prime? A: ${isPrime(13)}`)    // <--- true
console.log(`Q:    121 is prime? A: ${isPrime(121)}`)   // <--- false (11 * 11 = 121)
console.log(`Q: 104729 is prime? A: ${isPrime(104729)}`)// <--- true (104,729 is the 10,000th prime number!)
