import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

async function deleteById({ unit, id }) {
    const
        prisma = new PrismaClient()
        , deleteItem = await prisma[unit].deleteMany({ where: { id } });

    if (deleteItem?.count) { return id; } else throw new NotFoundError(unit, id);
};

export default deleteById;
