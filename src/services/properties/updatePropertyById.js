import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

async function updatePropertyById(id, data) {
    const
        prisma = new PrismaClient()
        , updatedProperty = await prisma.property.updateMany({ where: { id }, data });

    if (updatedProperty?.count !== 0) { return { message: `Property with id ${id} was updated succesfully` }; } else throw new NotFoundError('Property', id);
}

export default updatePropertyById;