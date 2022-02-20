import BaseError from "./base-error"

/**
 * Error response body
 * @param {Error} error - Preferably instance of BaseError
 * @param {number} statusCode - HTTP Status code
 * @returns {Object} - An error response body
 */
const errorResponseMapper =  ({ error, statusCode }: {error: BaseError, statusCode: number}): object => {
	const { name, message, context } = error
	return {
		name,
		type: error.constructor.name,
		context,
		statusCode,
		message,
	}
}

export default errorResponseMapper