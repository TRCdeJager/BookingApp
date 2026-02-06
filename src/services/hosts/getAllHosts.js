import { PrismaClient } from '@prisma/client'

async function getAllHosts({ where }) {
    const prisma = new PrismaClient();

    return await prisma.host.findMany({
        where
        , include: { listings: true }
        , omit: { password: true }
    });
}

export default getAllHosts;