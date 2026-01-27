class NotFoundError extends Error {
    //404 error
    constructor(resourceType, resourceId) {
        const msg = `Could not locate ${resourceType} with id ${resourceId}`;
        super(msg);
        this.name = 'NotFoundError';
    }
}

export default NotFoundError;