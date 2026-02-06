import { PrismaClient } from '@prisma/client'

async function getAll({ unit, where }) {
    const prisma = new PrismaClient();
    return await prisma[unit].findMany({ where });
}

export default getAll;