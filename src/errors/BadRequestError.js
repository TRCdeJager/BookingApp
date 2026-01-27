class BadRequestError extends Error {
    //400 error
    constructor(msg) {
        msg ??= `Bad Request`;
        super(msg);
        this.name = 'BadRequestError';
    }
}

export default BadRequestError;