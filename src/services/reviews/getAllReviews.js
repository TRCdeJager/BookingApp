import { PrismaClient } from '@prisma/client'

async function getAllReviews({ where }) {
    const prisma = new PrismaClient()

    return await prisma.review.findMany({
        where
        , include: {
            user: { omit: { password: true } }
            , property: true
        }
    });
}

export default getAllReviews;