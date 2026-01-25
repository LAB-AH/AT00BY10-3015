// src/mylib.js
/**
 * Basic arithmetic helpers.
 * All functions expect numbers and return a number.
 * divide() throws an Error when the divisor is 0.
 */

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

/**
 * @throws {Error} when divisor === 0
 */
function div(a, b) {
  if (b === 0) {
    throw new Error('ZeroDivision');
  }
  return a / b;
}

// Export as a CommonJS module (Node.js default)
module.exports = {
  add,
  sub,
  mul,
  div,
};