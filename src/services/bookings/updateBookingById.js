import NotFoundError from '../../errors/NotFoundError.js';
import { PrismaClient } from '@prisma/client';

async function updateBookingById(id, data) {
    const
        prisma = new PrismaClient()
        , updatedBooking = await prisma.booking.updateMany({ where: { id }, data });

    if (updatedBooking?.count) { return { message: `Booking with id ${id} was updated succesfully` }; } else throw new NotFoundError('Booking', id);
}

export default updateBookingById;