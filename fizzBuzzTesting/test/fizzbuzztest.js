// test/fizzbuzztest.js

var assert = require('assert');
var FB = require('../fizzBuzz.js');

describe('FizzBuzz Function', function()  {
  describe('#fizzBuzz()', function()  {
    it('should return \'fizz\' if num is divisible by 3 with no remainder', function()  {
      assert.equal('fizz', FB.fizzBuzz(3));
    });
    it('should return \'buzz\' if num is divisible by 5 with no remainder', function()  {
      assert.equal('buzz', FB.fizzBuzz(5));
    });
    it('should return \'fizzbuzz\' if num is divisible by both 3 and 5 with no remainder', function()  {
      assert.equal('fizzbuzz', FB.fizzBuzz(15));
    });
    it('should return num if num is not divisible by either 3 or 5', function()  {
      assert.equal(4, FB.fizzBuzz(4));
    });
  });
});
