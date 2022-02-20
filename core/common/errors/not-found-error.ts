import BusinessError from "./business-error";

/**
 * Throw to indicate that requested object could not be found
 */
class NotFoundError extends BusinessError {}

export default NotFoundError
