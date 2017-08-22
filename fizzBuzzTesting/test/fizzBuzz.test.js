const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const funcs = require('../src/fizzBuzz');
const expect = chai.expect;

chai.use(sinonChai);

describe('fizzBuzz', () =>{

  describe('fizzBuzz(num)', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      expect(fizzBuzz).to.be.a('function');
    });
    it('should return fizz if num is divisible by 3', () =>{
      expect(fizzBuzz(6)).to.be.a(fizz);
    });
    it('should return buzz if num is divisible by 5', () =>{
      expect(fizzBuzz(10)).to.be.a(buzz);
    });
    it('should return fizzbuzz if num is divisible by 3', () =>{
      expect(fizzBuzz(45)).to.be.a(fizzbuzz);
    });
    it('should return num if not divisible by either 3 or 5', () =>{
      expect(fizzBuzz(12)).to.be(fizz);
    });
  });

});
