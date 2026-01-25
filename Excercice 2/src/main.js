// src/main.js
const { add, sub, mul, div } = require('./mylib');

console.log('Demo of mylib:');
console.log(`2 + 3 = ${add(2, 3)}`);
console.log(`5 - 1 = ${sub(5, 1)}`);
console.log(`4 * 6 = ${mul(4, 6)}`);

try {
  console.log(`10 / 2 = ${div(10, 2)}`);
  console.log(`10 / 0 = ${div(10, 0)}`); // will throw
} catch (err) {
  console.error('Caught error:', err.message);
}