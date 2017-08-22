const fizzBuzz = require('../fizzBuzz');

describe('fizzBuzz', () => {
    it('should return `fizzbuzz` if num is divisible by both 3 and 5 with no remainder', () => {
      expect(fizzBuzz(15)).toEqual('fizzbuzz');
      expect(fizzBuzz(30)).toEqual('fizzbuzz');
      expect(fizzBuzz(45)).toEqual('fizzbuzz');
    });
    it('should return `fizz` if num is divisible by 3 with no remainder', () => {
      expect(fizzBuzz(6)).toEqual('fizz');
      expect(fizzBuzz(9)).toEqual('fizz');
      expect(fizzBuzz(12)).toEqual('fizz');
    });
    it('should `buzz` if num is divisible by 5 with no remainder', () => {
      expect(fizzBuzz(10)).toEqual('buzz');
      expect(fizzBuzz(20)).toEqual('buzz');
      expect(fizzBuzz(25)).toEqual('buzz');
    });
    it('should return num if number is not divisible by 3 or 5', () => {
      expect(fizzBuzz(8)).toEqual();
      expect(fizzBuzz(26)).toEqual(26);
      expect(fizzBuzz(37)).toEqual(37);
    });
  });