function isArmstrongNumber(n) {
  const l = n.toString().length;
  function helper(i, c) {
    if (i < 10) {
      return (Math.pow(i, l) + c);
    }
    return helper (Math.floor(i / 10), Math.pow(i % 10, l) + c);
    }
  return helper(n, 0) === n;
}

console.log(isArmstrongNumber(6)); // true
console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(351)); // false
