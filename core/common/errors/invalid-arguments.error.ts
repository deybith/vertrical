import BusinessError from "./business-error";

/**
 * Throw this to indicate a problem with inputs to the process
 */
class InvalidArgumentsError extends BusinessError {}

export default InvalidArgumentsError
