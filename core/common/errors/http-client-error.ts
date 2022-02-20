import { VerifyErrors } from "jsonwebtoken"
import BaseError from "./base-error"

/**
 * Subclass of errors relating to HTTP client errors
 */
export class HttpClientError extends BaseError {}

/**
 * Indicates problem receiving response from remote system
 */
export class HttpClientConnectivityError extends HttpClientError {}

interface IResponse {
  headers: Record<string, string>;
  body: unknown;
  statusCode: number;
}

/**
 * Subclass of errors indicating error response receieved from remote system
 */
export class HttpClientResponseError extends HttpClientError {

  response!: IResponse
	
	constructor(message: string, { context, cause, response: { headers, body, statusCode } }: {context: string, cause: VerifyErrors|unknown, response: IResponse } ) {
		super(message, { context, cause })
		this.response = {
			headers,
			body,
			statusCode,
		}
	}
}

/**
 * Indicates remote system returned a bad request error
 */
export class HttpClientResponseClientError extends HttpClientResponseError {}

/**
 * Indicates remote system returned a server error
 */
export class HttpClientResponseServerError extends HttpClientResponseError {}