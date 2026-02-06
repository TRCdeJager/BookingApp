import baseRouter from "../utils/baseRouter.js";
import getAllBookings from "../services/bookings/getAllBookings.js";
import getBookingById from "../services/bookings/getBookingById.js";
import modelData from "../models/bookingModel.json" with{type: 'json'};

const
    model = modelData.model
    , router = baseRouter({
        itemType: 'booking'
        , model: model
        , getAllItems: getAllBookings
        , getItemById: getBookingById
    });

export default router;