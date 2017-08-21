// cc31 fizzBuzzTesting
const fizzBuzzScript = require('../src/fizzbuzz');
const assert = require('chai').assert;

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const expect = chai.expect;
chai.use(sinonChai);


describe('FizzBuzz Test', () => {

  const fizzBuzz = fizzBuzzScript.fizzBuzz
  describe('#1: fizzBuzz imports from the script file and ', () => {
    it('should be a function', () => {
      expect(fizzBuzz).to.be.a('function');
    });
  });

  describe('#2: fizzBuzz return values', () => {
    it('should return a `String` when conditions are met', () => {
      assert.typeOf(fizzBuzz(15), 'string');
      assert.typeOf(fizzBuzz(9), 'string');
      assert.typeOf(fizzBuzz(10), 'string');
    });
    it('should return a `Number` when conditions are not met', () => {
      assert.typeOf(fizzBuzz(4), 'number');
    });
    console.log(fizzBuzz(44));
    it.skip('should return the given argument when conditions are not met', () => {
      expect(fizzBuzz(44).to.equal(44));
      // expect(fizzBuzz(44).to.be(44));
    });
  });

  describe('fizz', () => {
    // console.log(fizzBuzz(9));
    it.skip('should return `fizz` when the argument % 3 === 0', () => {
      // expect(fizzBuzz(9).to.equal('fizz'));
      expect(fizzBuzz(9).to.be('fizz'));
    });
  });

  describe('buzz', () => {
    // console.log(fizzBuzz(10));
    it.skip('should return `buzz` when the argument % 3 === 0', () => {
      // expect(fizzBuzz(10).to.equal('buzz'));
      expect(fizzBuzz(10).to.be('buzz'));
    });
  });

  describe('fizz and buzz', () => {
    // console.log(fizzBuzz(15));
    it.skip('should return `fizzbuzz` when the argument % 3 === 0', () => {
      // expect(fizzBuzz(15).to.equal('fizzbuzz'));
      expect(fizzBuzz(15).to.be('fizzbuzz'));
    });
  });
});
