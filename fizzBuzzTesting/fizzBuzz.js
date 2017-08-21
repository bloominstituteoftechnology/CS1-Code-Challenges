/*
 * Create the function fizzBuzz that takes a single integer as an argument.
 * Return 'fizz' if num is divisible by 3 with no remainder.
 * Return 'buzz' if num is divisible by 5 with no remainder.
 * Return 'fizzbuzz' if num is divisible by both 3 and 5 with no remainder.
 * If the number is not divisible by either 3 or 5 then return the number given as the argument.
 * Before you write your function write automated tests to test this function.
 * The main focus of this challenge is the testing aspect of it.
 */
const assert = require('chai').assert;
const funcs = require('./fizzBuzz');

const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
};

describe('fizzBuzz Functions', () => {

  describe('`fizzBuzz`', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return fizz for numbers divisable by 3', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const result = fizzBuzz(3);
      assert.equal(result, 'fizz', 'this number is divisable by 3');
    });
    it('should return buzz for numbers divisable by 5', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const result = fizzBuzz(5);
      assert.equal(result, 'buzz', 'this number is divisable by 3');
    });
    it('should return fizzbuzz for numbers divisable by 3 and 5', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const result = fizzBuzz(15);
      assert.equal(result, 'fizzbuzz', 'this number is divisable by 3');
    });
    it('should return the number if not divisable by 3 or 5', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const result = fizzBuzz(2);
      assert.equal(result, 2, 'this number is divisable by 3 or 5');
    });
    it('should return a number if not divisable by 3 or 5', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const result = fizzBuzz(2);
      assert.typeOf(result, 'number');
    });
  })
});
