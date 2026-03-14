const winston = require('winston');
const path = require('path');

// Define custom colors for console
const customLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        silly: 6
    },
    colors: {
        error: 'red',
        warn: 'yellow',
        info: 'blue',
        http: 'magenta',
        verbose: 'cyan',
        debug: 'white',
        silly: 'grey'
    }
};

winston.addColors(customLevels.colors);

// Custom format to filter out favicon.ico
const filterFaviconFormat = winston.format((info) => {
    // Check if the message contains 'GET /favicon.ico' or similar patterns
    // Adjust the condition based on how your application logs requests (e.g., info.message, info.req)
    const message = typeof info.message === 'string' ? info.message : '';
    
    if (message.includes("GET") && message.includes("favicon.ico")) {
        return false; // Return false to drop the log entry
    }
    return info;
})();

// Define the transports
const transports = [
    // 1. Console Transport: All events, color-coded, human-readable
    new winston.transports.Console({
        level: 'silly',
        format: winston.format.combine(
            filterFaviconFormat,
            winston.format.colorize(),
            winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            winston.format.cli()
        )
    }),

    // 2. Combined Log File: All events in JSON
    new winston.transports.File({
        filename: 'logs/combined.log',
        level: 'info',
        format: winston.format.combine(
            filterFaviconFormat,
            winston.format.json()
        )
    }),

    // 3. Error Log File: Only errors in JSON
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
        format: winston.format.combine(
            filterFaviconFormat,
            winston.format.json()
        )
    })
];

// Create the logger instance
const logger = winston.createLogger({
    level: 'info',
    defaultMeta: { service: 'user-service' },
    transports: transports,
    // Exit process on uncaught exceptions (optional)
    exitOnError: false 
});

module.exports = logger;