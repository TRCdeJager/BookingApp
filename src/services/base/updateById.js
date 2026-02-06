import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

async function updateById({ unit, id, data }) {
    const
        prisma = new PrismaClient()
        , item = await prisma[unit].updateMany({ where: { id }, data });

    if (item?.count) { return { message: `${unit} with id ${id} was updated succesfully` }; } else throw new NotFoundError(unit, id);
}

export default updateById;