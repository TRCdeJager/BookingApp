function errorHandler(err, req, res, next) {
    let
        msg = err.message || 'Something went wrong'
        , status = 500;

    switch (err.name) {
        case 'BadRequestError': {
            status = 400;
            break;
        }
        case 'UnauthorizedError': {
            status = 401;
            break;
        }
        case 'ForbiddenError': {
            status = 403;
            msg = 'Does you mother know your doing this?';
            break;
        }
        case 'NotFoundError': {
            status = 404;
            break;
        }
        default: {
            status = 500;
            msg = 'An error occurred on the server. Please check your request and try again.';
            console.error(err.message);
        }
    }

    res.status(status).json({ message: msg });
}

export default errorHandler;