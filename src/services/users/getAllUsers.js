import { PrismaClient } from '@prisma/client'

async function getAllUsers(where) {
    const prisma = new PrismaClient();

    return await prisma.user.findMany({
        where
        , include: {
            bookings: true
            , reviews: true
        }
        , omit: { password: true }
    });
}

export default getAllUsers;