import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

async function getPropertyById({ id }) {
    const prisma = new PrismaClient();
    let property;
    if (property = await prisma.property.findUnique({
        where: { id }
        , include: {
            host: { omit: { password: true } }
            , bookings: true
            , reviews: true
        }
    })) {
        return property;
    } else throw new NotFoundError('Property', id);
}

export default getPropertyById;
