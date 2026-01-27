import { PrismaClient } from "@prisma/client";
import validateRequestParams from "../../utils/validateRequestParams.js";

const keys = [
    'username'
    , 'password'
    , 'name'
    , 'email'
    , 'phoneNumber'
    , 'pictureUrl'
];

async function createUser(query) {
    let data;
    if (data = validateRequestParams(query, keys)) {
        const
            prisma = new PrismaClient()
            , newUser = await prisma.user.create({ data });
        delete newUser.password;
        return newUser;
    }
}

export default createUser;