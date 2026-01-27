import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

async function getHostById(id) {
    const prisma = new PrismaClient();

    let host;
    if (host = await prisma.host.findUnique({ where: { id }, include: { listings: true } })) {
        return host;
    } else throw new NotFoundError('Host', id);
}

export default getHostById;
