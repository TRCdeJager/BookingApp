import logger from '../utils/logger.js';

function logHandler(req, res, next) {
    const start = new Date();
    next();
    const ms = new Date() - start;
    logger.info(`\n\tMethod: ${req.method}\n\tURL: ${req.originalUrl}\n\tStatus: ${res.statusCode}\n\tDuration; ${ms}ms.\n${'-'.repeat(10)}\n`);
}

export default logHandler;