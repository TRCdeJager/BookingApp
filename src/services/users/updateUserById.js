import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

async function updateUserById(id, data) {
    const
        prisma = new PrismaClient()
        , updatedUser = await prisma.user.updateMany({ where: { id }, data });

    if (updatedUser?.count) { return { message: `User with id ${id} was updated succesfully` }; } else throw new NotFoundError('User', id);
}

export default updateUserById;