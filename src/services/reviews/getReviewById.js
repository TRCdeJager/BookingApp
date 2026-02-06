import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

async function getReviewById({ id }) {
    const prisma = new PrismaClient();

    let review;
    if (review = await prisma.review.findUnique({
        where: { id }
        , include: {
            user: { omit: { password: true } }
            , property: true
        }
    })) {
        return review;
    } else throw new NotFoundError('Review', id);
}

export default getReviewById;
