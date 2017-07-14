function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  if (num < 2) {
    return false;
  }
  for (var i = 2; i <= num; i++) { // <-- i < num/2 or Math.sqrt(num) for speed
    if ( num % i == 0 && i != num) {
      return false;
    } else {
      return true;
    }
  }
}

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
)
console.log(`Q:      0 is prime? A: ${isPrime(0)}`)
console.log(`Q:      1 is prime? A: ${isPrime(1)}`)
console.log(`Q:      2 is prime? A: ${isPrime(2)}`)
console.log(`Q:      3 is prime? A: ${isPrime(3)}`)
console.log(`Q:      4 is prime? A: ${isPrime(4)}`)
console.log(`Q:      5 is prime? A: ${isPrime(5)}`)
console.log(`Q:      6 is prime? A: ${isPrime(6)}`)
console.log(`Q:      7 is prime? A: ${isPrime(7)}`)
console.log(`Q:      8 is prime? A: ${isPrime(8)}`)
console.log(`Q:      9 is prime? A: ${isPrime(9)}`)
console.log(`Q:     10 is prime? A: ${isPrime(10)}`)
console.log(`Q:     11 is prime? A: ${isPrime(11)}`)
console.log(`Q:     12 is prime? A: ${isPrime(12)}`)
console.log(`Q:     13 is prime? A: ${isPrime(13)}`)
console.log(`Q:    121 is prime? A: ${isPrime(121)}`)
console.log(`Q: 104729 is prime? A: ${isPrime(104729)}`)
