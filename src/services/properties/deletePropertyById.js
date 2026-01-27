import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

async function deletePropertyById(id) {
    const
        prisma = new PrismaClient()
        , deleteProperty = await prisma.property.deleteMany({ where: { id } });

    if (deleteProperty?.count) { return id; } else throw new NotFoundError('Property', id);
};

export default deletePropertyById;
