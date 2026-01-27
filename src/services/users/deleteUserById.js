import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

async function deleteUserById(id) {
    const
        prisma = new PrismaClient()
        , deleteUser = await prisma.user.deleteMany({ where: { id } });

    if (deleteUser?.count) { return id; } else throw new NotFoundError('User', id);
};

export default deleteUserById;
