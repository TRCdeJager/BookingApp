import { PrismaClient } from '@prisma/client'

async function getAllBookings({ where }) {
    const prisma = new PrismaClient()

    return await prisma.booking.findMany({
        where
        , include: {
            user: { omit: { password: true } }
            , property: true
        }
    });
}

export default getAllBookings;