import { PrismaClient } from "@prisma/client";
import validateRequestParams from "../../utils/validateRequestParams.js";

const keys = [
    'userId'
    , 'propertyId'
    , 'rating'
    , 'comment'
];

async function createReview(query) {
    let data;
    if (data = validateRequestParams(query, keys)) {
        const prisma = new PrismaClient();
        return await prisma.review.create({ data });
    }
}

export default createReview;