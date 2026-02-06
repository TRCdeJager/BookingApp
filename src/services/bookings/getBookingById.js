import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

async function getBookingById({ id }) {
    const prisma = new PrismaClient()

    let booking;
    if (booking = await prisma.booking.findUnique({
        where: { id }
        , include: {
            user: { omit: { password: true } }
            , property: true
        }
    })) {
        return booking;
    } else throw new NotFoundError('Booking', id);
}

export default getBookingById;
