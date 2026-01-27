class ForbiddenError extends Error {
    //403 error
    constructor(msg) {
        msg ??= `Permission denied`;
        super(msg);
        this.name = 'ForbiddenError';
    }
}

export default ForbiddenError;