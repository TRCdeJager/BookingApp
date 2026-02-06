import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

async function getById({ unit, id }) {
    const prisma = new PrismaClient();
    let item;
    if (item = await prisma[unit].findUnique({ where: { id } })) { return item; } else throw new NotFoundError(unit, id);
}

export default getById;
