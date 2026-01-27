import baseRouter from "../utils/baseRouter.js";
import getAllBookings from "../services/bookings/getAllBookings.js";
import getBookingById from "../services/bookings/getBookingById.js";
import createBooking from "../services/bookings/createBooking.js";
import updateBookingById from "../services/bookings/updateBookingById.js";
import deleteBookingById from "../services/bookings/deleteBookingById.js";

const model = {
    userId: 'string'
    , propertyId: 'string'
    , checkinDate: 'dateTime'
    , checkoutDate: 'dateTime'
    , numberOfGuests: 'int'
    , totalPrice: 'int'
    , bookingStatus: 'string'
};
const router = baseRouter('Booking', model, getAllBookings, getBookingById, createBooking, updateBookingById, deleteBookingById);

export default router;