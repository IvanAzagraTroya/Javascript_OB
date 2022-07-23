const winston = require('winston')

const logger = winston.createLogger({
    level: "error",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
        new winston.transports.File({ filename: "error.log", level: "error" }),
    ],
});

function error() {
    throw new Error("Esto es un error")
}

try {
    error()
} catch(e) {
    logger.error(e)
}