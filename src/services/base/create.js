import { PrismaClient } from "@prisma/client";
import validateRequestParams from "../../utils/validateRequestParams.js";

async function create({ unit, query, minKeys }) {
    let data;
    if (data = validateRequestParams(query, minKeys)) {
        const
            prisma = new PrismaClient(),
            newItem = await prisma[unit].create({ data });

        if ('password' in newItem) delete newItem.password;

        return newItem;
    }
}

export default create;