// test/mylib.test.js
const { expect } = require('chai');      // you can also use assert or should
const { add, sub, mul, div } = require('../src/mylib'); // Testattavat funktiot

describe('mylib arithmetic functions', function () {

  // Suoritetaan kerran ennen testejä
  before(function () {
    console.log('\n=== Starting mylib test suite ===');
  });

  // Suoritetaan kerran kaikkien testien jälkeen
  after(function () {
    console.log('\n=== Finished mylib test suite ===');
  });

  // Suoritettavat testit
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

  // Jakolaskussa kaksi testitapausta, koska 0 jakoa ei voi testata samoin kuin muita ja sen tarvitsee paluttaa virheilmoitus
  describe('div()', function () {
    it('should return the quotient of two numbers', function () {
      expect(div(20, 5)).to.equal(4);
    });

    // Toinen testi varmistaa virheenkäsittelyn (jos jakaja = 0) ja sen tulee antaa virhe
    it('should throw an error when divisor is 0', function () {
      // Chai:n “to.throw” tarkistaa virheitä vain funktioista, joten kääritään kutsu funktioon
      const fn = () => div(10, 0);
      expect(fn).to.throw(Error, 'ZeroDivision');
    });
  });

});