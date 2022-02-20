import express from 'express'
import http from 'http'
import { ServerFunctionInterface } from '@core/types'
import configureMiddleWare from '../configuration/configure-middleware'
import logger from '@core/logger'
import { Type } from '@core/common/interfaces'
import { scanner } from './scanner'

export const server: ServerFunctionInterface = async (AppModule, { corsConfig }) => {
  const expressApp = express()
  const server = http.createServer(expressApp)

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