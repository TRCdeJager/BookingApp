import baseRouter from "../utils/baseRouter.js";
import getAllProperties from "../services/properties/getAllProperties.js";
import getPropertyById from "../services/properties/getPropertyById.js";
import createProperty from "../services/properties/createProperty.js";
import updatePropertyById from "../services/properties/updatePropertyById.js";
import deletePropertyById from "../services/properties/deletePropertyById.js";

const
    model = {
        hostId: 'string'
        , title: 'string'
        , description: 'string'
        , location: 'string'
        , pricePerNight: 'float'
        , bedroomCount: 'int'
        , bathRoomCount: 'int'
        , maxGuestCount: 'int'
        , rating: 'int'
    }
    , router = baseRouter('Property', model, getAllProperties, getPropertyById, createProperty, updatePropertyById, deletePropertyById);

export default router;


