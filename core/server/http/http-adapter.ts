import { HttpStatus } from '@core/common/enums'
import { RequestMethod } from '@core/common/enums/request-method.enum'
import { IMappedRoutes } from '@core/common/interfaces/routes.interfaces'
import express from 'express'

export const httpAdapter = (routes: IMappedRoutes[]): express.Application => {
  const expressApp = express()

  const createRoute = (expressFnc: any, route: IMappedRoutes) => {
    expressFnc(route.path, (req: express.Request, res: express.Response, next: express.NextFunction)  => {
      try {
        const methodResponse = route.callback(req, res)
        if (route.responseCode) res.status(route.responseCode)
        res.send(methodResponse)
      } catch (e) {
        res.status(HttpStatus.BAD_REQUEST).send((e as Error).message)
      }
    })
  }
  
  const registerRoute = (route: IMappedRoutes) => {
    switch (route.method) {
      case RequestMethod.GET:
        createRoute(expressApp.get.bind(expressApp), route)
        break;
      case RequestMethod.POST:
        createRoute(expressApp.post.bind(expressApp), route)
        break;
      case RequestMethod.PUT:
        createRoute(expressApp.put.bind(expressApp), route)
        break;
      case RequestMethod.PATCH:
        createRoute(expressApp.patch.bind(expressApp), route)
        break;
      case RequestMethod.PATCH:
        createRoute(expressApp.patch.bind(expressApp), route)
        break;
      case RequestMethod.DELETE:
        createRoute(expressApp.delete.bind(expressApp), route)
        break;
      case RequestMethod.OPTIONS:
        createRoute(expressApp.options.bind(expressApp), route)
        break;
      case RequestMethod.ALL:
        createRoute(expressApp.all.bind(expressApp), route)
        break;
    }
  }

  routes.forEach(route => {
    registerRoute(route)
  })

  return expressApp
}