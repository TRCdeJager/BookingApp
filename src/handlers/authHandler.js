import jwt from 'jsonwebtoken';
import UnAuthorizedError from '../errors/UnAuthorizedError.js';
import ForbiddenError from '../errors/ForbiddenError.js';

function authHandler(req, res, next) {
    // try {
    const
        token = req.headers.authorization
        , secretKey = process.env.AUTH_SECRET_KEY || '1k_H44t_SMURF3N!!';

    if (!token) throw new UnAuthorizedError();

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) throw new ForbiddenError('Invalid token provided');
        req.user = decoded;
        next();
    });
}

export default authHandler;