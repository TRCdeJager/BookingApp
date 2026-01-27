class UnauthorizedError extends Error {
    //401 error
    constructor(msg) {
        msg ??= 'No authorization token was provided';
        super(msg);
        this.name = 'UnauthorizedError';
    }
}

export default UnauthorizedError;