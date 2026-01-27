import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

async function updateHostById(id, data) {
    const
        prisma = new PrismaClient()
        , updatedHost = await prisma.host.updateMany({ where: { id }, data });

    if (updatedHost?.count) { return { message: `Host with id ${id} was updated succesfully` }; } else throw new NotFoundError('host', id);
}

export default updateHostById;