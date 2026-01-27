import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

async function deleteReviewById(id) {
    const
        prisma = new PrismaClient()
        , deleteReview = await prisma.review.deleteMany({ where: { id } });

    if (deleteReview?.count) { return id; } else throw new NotFoundError('Review', id);
}

export default deleteReviewById;
