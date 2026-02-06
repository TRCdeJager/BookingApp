import baseRouter from "../utils/baseRouter.js";
import getAllProperties from "../services/properties/getAllProperties.js";
import getPropertyById from "../services/properties/getPropertyById.js";
import modelData from "../models/propertyModel.json" with {type: "json"};

const
    model = modelData.model
    , router = baseRouter({
        itemType: 'property'
        , keysNotRequired: ['hostId']
        , model: model
        , getAllItems: getAllProperties
        , getItemById: getPropertyById
    });


export default router;


