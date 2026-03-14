const express = require('express');
const logger = require('./logger');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Example usage
logger.info('This is an informational message');
logger.warn('This is a warning');
logger.error('This is an error message');

// Middleware
app.use(express.json());

// Mount routes
app.use(routes);

// Start server
const server = app.listen(PORT, () => {
  logger.info(`Starting server...`);
  logger.info(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.warn(`Stopping`);
  server.close(() => {
    logger.info(`Server stopped`);
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  logger.warn(`Stopping`);
  server.close(() => {
    logger.info(`Server stopped`);
    process.exit(0);
  });
});

module.exports = app;