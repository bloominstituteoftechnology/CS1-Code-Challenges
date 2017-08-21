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

  describe('#2: fizzBuzz return value types', () => {
    it('should return a `String` when conditions are met', () => {
      assert.typeOf(fizzBuzz(15), 'string');
      assert.typeOf(fizzBuzz(9), 'string');
      assert.typeOf(fizzBuzz(10), 'string');
    });
    it('should return a `Number` when conditions are not met', () => {
      assert.typeOf(fizzBuzz(4), 'number');
    });
    console.log(fizzBuzz(44));
    it('should return the given argument when conditions are not met', () => {
      assert.equal(fizzBuzz(44), 44);
      // expect(fizzBuzz(44).to.equal(44));
      // expect(fizzBuzz(44).to.be(44));
    });
  });

  describe('#3: fizz', () => {
    // console.log(fizzBuzz(9));
    it('should return `fizz` when the argument % 3 === 0', () => {
      assert.equal(fizzBuzz(6), 'fizz');
      // expect(fizzBuzz(9).to.equal('fizz'));
      // expect(fizzBuzz(9).to.be('fizz'));
    });
  });

  describe('#4: buzz', () => {
    // console.log(fizzBuzz(10));
    it('should return `buzz` when the argument % 5 === 0', () => {
      assert.equal(fizzBuzz(10), 'buzz');
      // expect(fizzBuzz(10).to.equal('buzz'));
      // expect(fizzBuzz(10).to.be('buzz'));
    });
  });

  describe('#5: fizzbuzz', () => {
    // console.log(fizzBuzz(15));
    it('should return `fizzbuzz` when the argument % 3 ===0 && % 5 === 0', () => {
      assert.equal(fizzBuzz(15), 'fizzbuzz');
      // expect(fizzBuzz(15).to.equal('fizzbuzz'));
      // expect(fizzBuzz(15).to.be('fizzbuzz'));
    });
  });
});
