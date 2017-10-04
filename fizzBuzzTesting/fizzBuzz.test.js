/*
 * Create the function fizzBuzz that takes a single integer as an argument.
 * Return 'fizz' if num is divisible by 3 with no remainder.
 * Return 'buzz' if num is divisible by 5 with no remainder.
 * Return 'fizzbuzz' if num is divisible by both 3 and 5 with no remainder.
 * If the number is not divisible by either 3 or 5 then return the number given as the argument.
 * Before you write your function write automated tests to test this function.
 * The main focus of this challenge is the testing aspect of it.
 */

const chai = require('chai');
const assert = chai.assert;

describe('fizzBuzz', () => {
  it('should be a function', () => {
    assert.isFunction(fizzBuzz);
  });
  it('should return a string', () => {
    const result = fizzBuzz(5);
    assert.isString(result);
  });
  it('should return \'fizz\'', () => {
    const result = fizzBuzz(21);
    assert.equal(result, 'fizz');
  });
  it('should return \'buzz\'', () => {
    const result = fizzBuzz(55);
    assert.equal(result, 'buzz')
  });
  it('should return \'fizzbuzz\'', () => {
    const result = fizzBuzz(15);
    assert.equal(result, 'fizzbuzz')
  });
  it('should return back the number if not divisible by either 3 or 5', () => {
    const result = fizzBuzz(79);
    assert.equal(result, 79)
  });
it('should correctly calculate the first 100 numbers', () => {
  const calculated = [];
  const expected = [1, 2, 'fizz', 4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz',
  16,17,'fizz',19,'buzz','fizz',22,23,'fizz','buzz',26,'fizz',28,29,'fizzbuzz',
  31,32,'fizz',34,'buzz','fizz',37,38,'fizz','buzz',41,'fizz',43,44,'fizzbuzz',
  46,47,'fizz',49,'buzz','fizz',52,53,'fizz','buzz',56,'fizz',58,59,'fizzbuzz',
  61,62,'fizz',64,'buzz','fizz',67,68,'fizz','buzz',71,'fizz',73,74,'fizzbuzz',
  76,77,'fizz',79,'buzz','fizz',82,83,'fizz','buzz',86,'fizz', 88,89, 'fizzbuzz',
  91, 92, 'fizz', 94, 'buzz', 'fizz', 97, 98, 'fizz', 'buzz']
  for (let i = 0; i < 100; i++) {
    result = fizzBuzz(i);
    calculated.push(result);
  }
  assert.equal(calculated, expected);
});

});


const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  else if (num % 5 === 0) return 'buzz';
  else if (num % 3 === 0) return 'fizz';
  return num
};
