import baseRouter from "../utils/baseRouter.js";
import getAllUsers from "../services/users/getAllUsers.js";
import getUserById from "../services/users/getUserById.js";
import createUser from "../services/users/createUser.js";
import updateUserById from "../services/users/updateUserById.js";
import deleteUserById from "../services/users/deleteUserById.js";

const
    model = {
        username: 'string'
        , password: 'string'
        , name: 'string'
        , email: 'string'
        , phoneNumber: 'string'
        , pictureUrl: 'string'
    }
    , router = baseRouter('User', model, getAllUsers, getUserById, createUser, updateUserById, deleteUserById);

export default router;


