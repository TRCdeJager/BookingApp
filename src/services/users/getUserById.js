import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

async function getUserById({ id }) {
    const prisma = new PrismaClient()
    let user;
    if (user = await prisma.user.findUnique({
        where: { id }
        , include: {
            bookings: true
            , reviews: true
        }
        , omit: { password: true }
    })) {
        return user;
    } else throw new NotFoundError('User', id);
}

export default getUserById;
