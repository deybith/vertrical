import { HTTP_CODE_METADATA, METHOD_METADATA, MODULE_METADATA, PATH_METADATA } from "@core/common/constants"
import { RequestMethod } from "@core/common/enums/request-method.enum"
import { Type } from "@core/common/interfaces"
import { IMappedRoutes } from "@core/common/interfaces/routes.interfaces"
import { trim } from "@core/common/utils/trim.util"
import logger from "@core/logger"

export const scanner = (metatype: Type<any>): IMappedRoutes[] => {
  const modules : {basePath: string, module: Type<any>}[] = []
  const controllers : {basePath: string, controller: Type<any>}[] = []
  const routes : IMappedRoutes[] = []

  const reflectMetadata = (metatype: Type<any>, metadataKey: string) => {
    return Reflect.getMetadata(metadataKey, metatype) || [];
  }

  const reflectStringMetadata = (metatype: Type<any>, metadataKey: string) => {
    return Reflect.getMetadata(metadataKey, metatype) || '';
  }

  const reflectImports = (module: Type<any>, basePath = ''): void => {
    const imports: Type<any>[] = reflectMetadata(module, MODULE_METADATA.IMPORTS)
    const moduleBasePath: string = reflectStringMetadata(module, MODULE_METADATA.PATH)
    if (!basePath && moduleBasePath) basePath = moduleBasePath
    if (imports && imports.length) {
      for (const related of imports) {
        const relatedBasePath: string = reflectStringMetadata(related, MODULE_METADATA.PATH)
        reflectImports(reflectMetadata(related, MODULE_METADATA.IMPORTS), basePath += relatedBasePath && `/${trim(relatedBasePath, '/')}`)
        modules.push({basePath, module: related})
      }
    }
  }

  const reflectControllers = () => {
    if (modules && modules.length) {
      const AllControllers = modules.reduce((acc: {basePath: string, controller: Type<any>}[], next) => {
        const relatedControllers = reflectMetadata(next.module, MODULE_METADATA.CONTROLLERS)
          .map((controller: Type<any>) => ({
            basePath: next.basePath,
            controller,
          }))
        acc.push(...relatedControllers)
        return acc
      }, [])
      
      controllers.push(...AllControllers)
    } else logger.warn('No modules to reflect controllers')
  }

  const getRoutes = () => {
    controllers.forEach(ctrl => {
     
      const Controller = ctrl.controller
      const moduleBasePath = ctrl.basePath
      const basePath = reflectMetadata(Controller, PATH_METADATA)
      const methods = Reflect.ownKeys(Controller.prototype)
      
      const controllerInstance = new Controller
      for (let i = 1; methods.length > i; i++) {
        const methodName = methods[i] as string
        const methodInstance = controllerInstance[methodName]
        const methodMetadata = Reflect.getMetadata(METHOD_METADATA, methodInstance)
        if (methodMetadata === undefined) continue
        const pathMetadata = Reflect.getMetadata(PATH_METADATA, methodInstance)
        const httpResponseMetadata = Reflect.getMetadata(HTTP_CODE_METADATA, methodInstance)
        routes.push({
          method: methodMetadata as RequestMethod,
          path: `${moduleBasePath}/${trim(basePath, '/')}/${trim(pathMetadata, '/')}`,
          callback: methodInstance.bind(controllerInstance),
          responseCode: httpResponseMetadata,
        })
      }
    })
  }
  
  reflectImports(metatype)
  reflectControllers()
  getRoutes()

  return routes
}