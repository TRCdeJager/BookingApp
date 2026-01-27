import { PrismaClient } from "@prisma/client";
import validateRequestParams from "../../utils/validateRequestParams.js";

const minKeys = [
    'userId'
    , 'propertyId'
    , 'checkinDate'
    , 'checkoutDate'
    , 'numberOfGuests'
    , 'totalPrice'
    , 'bookingStatus'
];

async function createBooking(query) {
    let data;
    if (data = validateRequestParams(query, minKeys)) {
        const prisma = new PrismaClient();
        return await prisma.booking.create({ data });
    }
}

export default createBooking;