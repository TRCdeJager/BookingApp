import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

async function deleteHostById(id) {
    const
        prisma = new PrismaClient()
        , deleteHost = await prisma.host.deleteMany({ where: { id } });

    if (deleteHost?.count) { return id; } else throw new NotFoundError('Host', id);
};

export default deleteHostById;
