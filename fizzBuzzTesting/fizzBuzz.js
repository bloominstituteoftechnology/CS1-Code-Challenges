/*
 * Create the function fizzBuzz that takes a single integer as an argument.
 * Return 'fizz' if num is divisible by 3 with no remainder.
 * Return 'buzz' if num is divisible by 5 with no remainder.
 * Return 'fizzbuzz' if num is divisible by both 3 and 5 with no remainder.
 * If the number is not divisible by either 3 or 5 then return the number given as the argument.
 * Before you write your function write automated tests to test this function.
 * The main focus of this challenge is the testing aspect of it.
 */

function fizzBuzz(num) {
  const rem3 = num % 3
  const rem5 = num % 5;
  if ((!rem3 && !rem5)) {
    return 'fizzbuzz';
  }
  if (!rem3) {
    return 'fizz';
  }
  if (!rem5) {
    return 'buzz';
  }
  return num;
};

module.exports = { fizzBuzz };
