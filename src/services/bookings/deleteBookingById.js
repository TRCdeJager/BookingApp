import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

async function deleteBookingById(id) {
    const
        prisma = new PrismaClient()
        , deleteBooking = await prisma.booking.deleteMany({ where: { id } });

    if (deleteBooking?.count) { return id; } else throw new NotFoundError('Booking', id);
};

export default deleteBookingById;
