import baseRouter from "../utils/baseRouter.js";
import getAllHosts from "../services/hosts/getAllHosts.js";
import getHostById from "../services/hosts/getHostById.js";
import createHost from "../services/hosts/createHost.js";
import updateHostById from "../services/hosts/updateHostById.js";
import deleteHostById from "../services/hosts/deleteHostById.js";

const model = {
    username: 'string'
    , password: 'string'
    , name: 'string'
    , email: 'string'
    , phoneNumber: 'string'
    , pictureUrl: 'string'
    , aboutMe: 'string'
};

const router = baseRouter('Host', model, getAllHosts, getHostById, createHost, updateHostById, deleteHostById);

export default router;