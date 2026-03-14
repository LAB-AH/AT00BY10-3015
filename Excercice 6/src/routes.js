const express = require('express');
const router = express.Router();
const counter = require('./counter');
const logger = require('./logger');

// Log incoming requests
router.use((req, res, next) => {
  logger.info(`${req.method} '${req.path}'`);
  next();
});

// GET /counter-increase - Increase counter by one
router.get('/counter-increase', (req, res) => {
  const newValue = counter.increase();
  res.json({ count: newValue });
});

// GET /counter-read - Read current counter value
router.get('/counter-read', (req, res) => {
  const currentValue = counter.read();
  res.json({ count: currentValue });
});

// GET /counter-reset - Reset counter to zero
router.get('/counter-reset', (req, res) => {
  const newValue = counter.reset();
  res.json({ count: newValue });
});

// Handle unknown routes
router.all('*', (req, res) => {
  logger.warn(`Unknown route: ${req.method} '${req.path}'`);
  res.status(404).json({ error: 'Not found' });
});

module.exports = router;