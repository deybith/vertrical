export function Controller(path: any): ClassDecorator {

  return (target: Function) => {
    Reflect.defineMetadata('path', path, target);
  }
}