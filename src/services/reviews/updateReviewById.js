import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

async function updateReviewById(id, data) {
    const
        prisma = new PrismaClient()
        , updatedReview = await prisma.review.updateMany({ where: { id }, data });

    if (updatedReview?.count) { return { message: `Review with id ${id} was updated succesfully` }; } else throw new NotFoundError('review', id);
}

export default updateReviewById;