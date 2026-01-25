// test/mylib.test.js
const { expect } = require('chai');      // you can also use assert or should
const { add, sub, mul, div } = require('../src/mylib');

describe('mylib arithmetic functions', function () {

  // Runs once before all tests in this suite
  before(function () {
    console.log('\n=== Starting mylib test suite ===');
  });

  // Runs once after all tests in this suite
  after(function () {
    console.log('\n=== Finished mylib test suite ===');
  });

  describe('add()', function () {
    it('should return the sum of two numbers', function () {
      expect(add(2, 3)).to.equal(5);
    });
  });

  describe('sub()', function () {
    it('should return the difference of two numbers', function () {
      expect(sub(10, 4)).to.equal(6);
    });
  });

  describe('mul()', function () {
    it('should return the product of two numbers', function () {
      expect(mul(3, 7)).to.equal(21);
    });
  });

  describe('div()', function () {
    it('should return the quotient of two numbers', function () {
      expect(div(20, 5)).to.equal(4);
    });

    it('should throw an error when divisor is 0', function () {
      // Chai’s “to.throw” works with a function wrapper
      const fn = () => div(10, 0);
      expect(fn).to.throw(Error, 'ZeroDivision');
    });
  });

});