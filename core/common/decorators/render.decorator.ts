export function Render(template: string): MethodDecorator {
  return (
    target: object,
    key: string | symbol,
    descriptor: TypedPropertyDescriptor<any>,
  ) => {
    Reflect.defineMetadata('__render__', template, descriptor.value);
    return descriptor;
  };
}
