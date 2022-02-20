import { Type } from "@core/common/interfaces"

export const scanner = (metatype: Type<any>) => {
  const modules : Type<any>[] = []

  const reflectMetadata = (metatype: Type<any>, metadataKey: string) => {
    return Reflect.getMetadata(metadataKey, metatype) || [];
  }

  const reflectImports = (module: Type<any>): void => {
    const imports: Type<any>[] = reflectMetadata(module, 'imports')
    if (imports && imports.length) {}
      for (const related of imports) {
        reflectImports(reflectMetadata(related, 'imports'))
        modules.push(related)
      }
  }
  
  reflectImports(metatype)

  console.log(modules, 'asd')
}