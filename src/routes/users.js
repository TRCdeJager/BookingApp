import baseRouter from "../utils/baseRouter.js";
import getAllUsers from "../services/users/getAllUsers.js";
import getUserById from "../services/users/getUserById.js";
import modelData from "../models/userModel.json" with {type: "json"};

const
    model = modelData.model
    , router = new baseRouter({
        itemType: 'user'
        , model: model
        , getAllItems: getAllUsers
        , getItemById: getUserById
    });

export default router;


