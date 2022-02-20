import BusinessError from "./business-error";

/**
 *  Throw this to indicate a request conflict with current state of the target resource
 */
class ConflictError extends BusinessError {}

export default ConflictError
