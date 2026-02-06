import { Router } from 'express';
import authHandler from '../handlers/authHandler.js';
import dataParse from './dataParser.js';
import errorHandler from '../handlers/errorHandler.js';
import getAll from '../services/base/getAll.js';
import getById from '../services/base/getById.js';
import create from '../services/base/create.js';
import updateById from '../services/base/updateById.js';
import deleteById from '../services/base/deleteById.js';

function baseRouter({
    itemType
    , model
    , keysNotRequired = []
    , getAllItems = getAll
    , getItemById = getById
    , createNew = create
    , updateItemById = updateById
    , deleteItemById = deleteById
}) {
    const
        router = Router()
        , requiredKeys = Object.keys(model).filter(key => !keysNotRequired.includes(key));

    router.get('/', async (req, res, next) => {
        try {
            const
                query = dataParse(req.query, model)
                , items = await getAllItems({ unit: itemType, where: query });
            res.status(200).json(items);

        } catch (error) {
            next(error);
        }
    });

    router.post('/', authHandler, async (req, res, next) => {
        try {
            const
                newInput = dataParse(req.body, model)
                , newItem = await createNew({ unit: itemType, query: newInput, minKeys: requiredKeys });
            res.status(201).json(newItem);
        } catch (error) {
            next(error);
        }
    });

    // :id
    router.get('/:id', async (req, res, next) => {
        try {
            const
                { id } = req.params
                , item = await getItemById({ unit: itemType, id: id });
            res.status(200).json(item);
        } catch (error) {
            next(error);
        }
    });

    router.put('/:id', authHandler, async (req, res, next) => {
        try {
            const
                { id } = req.params
                , data = dataParse(req.body, model)
                , updatedItem = await updateItemById({ unit: itemType, id: id, data: data });
            res.status(200).json(updatedItem);
        } catch (error) {
            next(error);
        }
    }, errorHandler);

    router.delete('/:id', authHandler, async (req, res, next) => {
        try {
            const
                { id } = req.params
                , deletedItemId = await deleteItemById({ unit: itemType, id: id });
            res.status(200).json({ message: `${itemType} with id ${deletedItemId} was deleted` });
        } catch (error) {
            next(error);
        }
    });

    return router;
}

export default baseRouter;