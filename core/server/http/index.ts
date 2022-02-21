import express from 'express'
import http from 'http'
import { ServerFunctionInterface } from '@core/types'
import configureMiddleWare from '../configuration/configure-middleware'
import logger from '@core/logger'
import { scanner } from './scanner'
import { httpAdapter } from './http-adapter'
import { DEBUG } from '@core/common/constants.env'



export const server: ServerFunctionInterface = async (AppModule, { corsConfig }) => {
  const expressApp = express()
  const server = http.createServer(expressApp)

  expressApp.use('/', httpAdapter(scanner(AppModule)))
  
  if (DEBUG) logger.debug('Routes ', scanner(AppModule))

  if (corsConfig) configureMiddleWare(expressApp, corsConfig)

  const listen = (port: number): void => {
    server.listen(port, () => {
      logger.info(`Listening on port ${port}`)
    })
  }

  const adapter = (customAdapter: express.Application) => {
    expressApp.use('/', customAdapter)
  }

  return {
    adapter,
    listen
  }
}