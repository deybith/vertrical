import express from 'express'
import http from 'http'
import { ServerFunctionInterface } from '@core/types'
import configureMiddleWare from '../configuration/configure-middleware'
import logger from '@core/logger'
import { scanner } from './scanner'
import { httpAdapter } from './http-adapter'

export const server: ServerFunctionInterface = async (AppModule, { corsConfig }) => {
  const expressApp = express()
  const server = http.createServer(expressApp)

  expressApp.use('/', httpAdapter(scanner(AppModule)))
  console.log(scanner(AppModule), 'AppModuleAppModule')

  if (corsConfig) configureMiddleWare(expressApp, corsConfig)

  const listen = (port: number): void => {
    server.listen(port, () => {
      logger.info(`Listening on port ${port}`)
    })
  }

  return {
    adapter: (adapter) => adapter(expressApp),
    listen
  }
}