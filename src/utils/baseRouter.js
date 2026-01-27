import { Router } from 'express';
import authHandler from '../handlers/authHandler.js';
import dataParse from './dataParser.js';
import errorHandler from '../handlers/errorHandler.js';

function baseRouter(itemType, model, getAllItems, getItemById, createNew, updateById, deleteById) {
    const router = Router();

    router.get('/', async (req, res, next) => {
        try {
            const query = dataParse(req.query, model);
            const items = await getAllItems(query);
            res.status(200).json(items);

        } catch (error) {
            next(error);
        }
    });

    router.post('/', authHandler, async (req, res, next) => {
        try {
            const
                newInput = dataParse(req.body, model)
                , newItem = await createNew(newInput);
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
                , item = await getItemById(id);
            res.status(200).json(item);
        } catch (error) {
            next(error);
        }
    });

    router.put('/:id', authHandler, async (req, res, next) => {
        try {
            const
                { id } = req.params
                , values = dataParse(req.body, model)
                , updatedItem = await updateById(id, values);
            res.status(200).json(updatedItem);
        } catch (error) {
            next(error);
        }
    }, errorHandler);

    router.delete('/:id', authHandler, async (req, res, next) => {
        try {
            const
                { id } = req.params
                , deletedItemId = await deleteById(id);
            res.status(200).json({ message: `${itemType} with id ${deletedItemId} was deleted` });
        } catch (error) {
            next(error);
        }
    });

    return router;
}

export default baseRouter;