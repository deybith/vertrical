import { PRODUCTION } from '@core/common/constants.env'
import { nextConnector } from '@front'
import express from 'express'

export const nextAdapter = async (): Promise<express.Application> => {
  const app = express()
  const nextApp = await nextConnector({ dev: !PRODUCTION, dir:'./front' })
  const handle = nextApp.getRequestHandler()

  app.all(/^(?!(\/api\/))/, (req, res) => {
    return handle(req, res)
  })

  return app
}