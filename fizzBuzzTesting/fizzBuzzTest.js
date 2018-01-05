const assert = require('chai').assert;
const funcs = require('../src/project-1');

describe('FizzBuzz Tests', () => {
  describe('`fizzBuzz`', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return fizz if num is divisible by 3 but not 5', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(12), 'fizz');
      assert.equal(fizzBuzz(36), 'fizz');
      assert.equal(fizzBuzz(156), 'fizz');
    });
    it('should return buzz if num is divisible by 5 but not 3', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(20), 'buzz');
      assert.equal(fizzBuzz(35), 'buzz');
      assert.equal(fizzBuzz(155), 'buzz');
    });
    it('should return fizzbuzz if num is divisible by 3 and 5', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(15), 'fizzbuzz');
      assert.equal(fizzBuzz(45), 'fizzbuzz');
      assert.equal(fizzBuzz(165), 'fizzbuzz');
    });
    it('should return num if num is not divisible by 3 nor 5', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(8), 8);
      assert.equal(fizzBuzz(52), 52);
      assert.equal(fizzBuzz(292), 292);
    });
  });
});
