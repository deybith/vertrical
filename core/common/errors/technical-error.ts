import BaseError from "./base-error"

/**
 * A subclass of errors that can be thrown for technical exceptions
 */
class TechnicalError extends BaseError {
	isRetryable = true
}

export default TechnicalError