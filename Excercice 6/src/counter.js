const logger = require('./logger');

// In-memory counter state
let count = 0;

const counter = {
  // Read current count value
  read() {
    logger.info(`Counter value is ${count}`);
    return count;
  },

  // Increase count by one
  increase() {
    count += 1;
    logger.info(`Counter increased by 1 to ${count}`);
    return count;
  },

  // Reset count to zero
  reset() {
    count = 0;
    logger.info(`Counter reset to ${count}`);
    return count;
  },

  // Get current value (for testing purposes)
  getValue() {
    return count;
  },

  // Set value (for testing purposes)
  setValue(value) {
    count = value;
    return count;
  }
};

module.exports = counter;