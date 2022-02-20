import BusinessError from "./business-error";

/**
 * Throw this when caller is unauthorized
 */
class UnauthorizedError extends BusinessError {}

export default UnauthorizedError
