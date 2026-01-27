import { Router } from 'express';
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken';
import "dotenv/config";
import validateRequestParams from '../utils/validateRequestParams.js';
//errors
import UnauthorizedError from '../errors/UnAuthorizedError.js';
import errorHandler from '../handlers/errorHandler.js';

const
    router = Router()
    , secretKey = process.env.AUTH_SECRET_KEY || '1k_H44t_SMURF3N!!';

router.post('/', async (req, res, next) => {
    try {
        let where;
        if (where = validateRequestParams(req.body, ['username', 'password'])) {
            const
                prisma = new PrismaClient()
                , user = await prisma.user.findUnique({ where });

            if (!user) throw new UnauthorizedError('Username and password don\'t match');

            const token = jwt.sign({ userId: user.id }, secretKey);
            res.status(200).json({ message: 'Successfully logged in!', token });
        }
    } catch (error) {
        next(error);
    }
}, errorHandler);

export default router;
