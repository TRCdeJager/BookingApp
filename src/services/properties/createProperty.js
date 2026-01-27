import { PrismaClient } from "@prisma/client";
import validateRequestParams from "../../utils/validateRequestParams.js";

const keys = [
    'title'
    , 'description'
    , 'location'
    , 'pricePerNight'
    , 'bedroomCount'
    , 'bathRoomCount'
    , 'maxGuestCount'
    , 'rating'
];

async function createProperty(query) {
    let data;
    if (data = validateRequestParams(query, keys)) {
        const prisma = new PrismaClient();
        return await prisma.property.create({ data });
    }
}

export default createProperty;