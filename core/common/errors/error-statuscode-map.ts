import { StatusCodes } from 'http-status-codes'
import BusinessError from './business-error'
import ConflictError from './conflic-error'
import { HttpClientResponseError } from './http-client-error'
import InvalidArgumentsError from './invalid-arguments.error'
import NotFoundError from './not-found-error'
import UnauthorizedError from './unauthorized-error'

/**
 * Maps application error to HTTP status code
 * @param {Error} error
 * @returns {number}
 */
const ErrorToStatusCodeMapper = function(error: unknown) {
	if (error instanceof NotFoundError) {
		return StatusCodes.NOT_FOUND
	} else if (error instanceof ConflictError) {
		return StatusCodes.CONFLICT
	} else if (error instanceof InvalidArgumentsError) {
		return StatusCodes.BAD_REQUEST
	} else if (error instanceof UnauthorizedError) {
		return StatusCodes.UNAUTHORIZED
	} else if (error instanceof HttpClientResponseError) {
		return error.response.statusCode
	} else if (error instanceof BusinessError) {
		// Checking for BusinessError towards then end because other types are
		// subclasses of BusinessError
		return StatusCodes.BAD_REQUEST
	} else {
		return StatusCodes.INTERNAL_SERVER_ERROR
	}
}


export default ErrorToStatusCodeMapper