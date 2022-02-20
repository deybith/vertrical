import { VerifyErrors } from "jsonwebtoken"

class BaseError extends Error {
	isRetryable = false
  cause?: VerifyErrors|unknown
  context?: string
	/**
	 * The base error
	 * @param {String} message - The error message to set
	 * @param {Error} param1.cause - Cause of the erreor
	 * @param {String} param1.context - What action was attempted
	 */
	constructor(message: string, { cause, context }: {cause?: VerifyErrors|unknown, context?: string} = {} ) {
		super(message)
		this.cause = cause
		this.context = context
	}
}

export default BaseError
