// cc31 fizzBuzzTesting

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const fizzBuzzScript = require('../src/fizzbuzz');

const expect = chai.expect;
chai.use(sinonChai);

describe('FizzBuzz Test ', () => {

  const fizzBuzz = fizzBuzzScript.fizzBuzz
  describe('#1: fizzBuzz imports from the script file and ', () => {
    it('should be a function', () => {
      expect(fizzBuzz).to.be.a('function');
    });
  });

  describe.skip('#2: fizzBuzz return values ', () => {
    it('should be a `Number`', () => {
      //
    });
    it('should be a `String`', () => {
      //
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
