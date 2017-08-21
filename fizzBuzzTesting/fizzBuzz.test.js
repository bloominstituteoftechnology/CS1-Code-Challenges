// cc31 fizzBuzzTesting

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const fizzBuzz = require('./fizzbuzz');
const expect = chai.expect;
chai.use(sinonChai);

describe('FizzBuzz Test', () => {

  describe('fizzBuzz', () => {
    it('should be a function', () => {
      expect(fizzBuzz)
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


})
