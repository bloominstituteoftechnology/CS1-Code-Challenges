function sumOfDigits(num) {
  function helper(n, c) {
    if (n > 9) {
      return helper(Math.floor(n / 10), c + n % 10);
    }
    return n + c;
  }
  return helper(num, 0);
}

console.log(sumOfDigits(23)); // 5
console.log(sumOfDigits(496)); //19
