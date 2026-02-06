import { PrismaClient } from '@prisma/client'

async function getAllProperties({ where }) {
    const prisma = new PrismaClient();

    return prisma.property.findMany({
        where
        , include: {
            host: { omit: { password: true } }
            , bookings: true
            , reviews: true
        }
    });
}

export default getAllProperties;