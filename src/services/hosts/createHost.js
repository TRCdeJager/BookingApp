import { PrismaClient } from "@prisma/client";
import validateRequestParams from "../../utils/validateRequestParams.js";

const keys = [
    'username'
    , 'password'
    , 'name'
    , 'email'
    , 'phoneNumber'
    , 'pictureUrl'
    , 'aboutMe'
];

async function createHost(query) {
    let data;
    if (data = validateRequestParams(query, keys)) {
        const
            prisma = new PrismaClient()
            , newHost = await prisma.host.create({ data });

        delete newHost.password;
        return newHost;
    }
}

export default createHost;