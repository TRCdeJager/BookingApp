import baseRouter from "../utils/baseRouter.js";
import getAllHosts from "../services/hosts/getAllHosts.js";
import getHostById from "../services/hosts/getHostById.js";
import modelData from "../models/hostModel.json" with {type: "json"};

const model = modelData.model
    , router = baseRouter({
        itemType: 'host'
        , model: model
        , getAllItems: getAllHosts
        , getItemById: getHostById
    });

export default router;