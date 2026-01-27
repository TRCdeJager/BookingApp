import BadRequestError from "../errors/BadRequestError.js";

const parsers = {
    'int': parseFloat
    , 'float': parseFloat
    , 'dateTime': (x) => new Date(Date.parse(x))
};

function dataParse(input, model) {
    const
        modelEntries = Object.entries(model)
        , retval = {};
    for (const [key, dataType] of modelEntries)
        if (key in input) {
            const
                parser = parsers[dataType]
                , value = parser
                    ? parser(input[key])
                    : input[key];
            if (value !== 0 && !value) throw new BadRequestError(`Bad request: value ${value} of ${key} is not of type ${dataType}`);
            retval[key] = value;
        }
    return retval;
}

export default dataParse;