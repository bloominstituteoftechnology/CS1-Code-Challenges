// cc31 fizzBuzzTesting
const fizzBuzzScript = require('../src/fizzbuzz');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');

chai.use(sinonChai);
const expect = chai.expect;
const assert = require('chai').assert;

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
    it('should return the same number when conditions are not met', () => {
      expect(fizzBuzz(44).to.equal(44));
    });

  });


  describe('fizz', () => {
    //
  });

  describe('buzz', () => {
    //
  });

  describe('fizz and buzz', () => {
    //
  });
});
