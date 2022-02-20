import BaseError from "./base-error"

/**
 * A subclass of errors that will be thrown for business reasons
 */
class BusinessError extends BaseError {
	isRetryable = false
}

export default BusinessError
