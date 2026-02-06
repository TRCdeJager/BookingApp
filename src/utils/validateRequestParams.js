import BadRequestError from "../errors/BadRequestError.js";

function validateRequestParams(query, minKeys) {
    // console.log({ minKeys });
    //no model, no problem
    if (!(minKeys?.length)) return query;

    if (!query) throw new BadRequestError('Bad request: body is missing');

    if (minKeys.every(key => key in query)) {
        for (const [key, value] of Object.entries(query)) {
            if (value !== 0 && !value) throw new BadRequestError(`Bad request: ${key} is of an invalid data type`);
        }
        return query;
    } else {
        const
            missingKeys = minKeys.filter((key) => !(key in query))
            , msg = `Bad request: missing values for ${missingKeys.join(', ')}`;
        throw new BadRequestError(msg);
    }
}

export default validateRequestParams;