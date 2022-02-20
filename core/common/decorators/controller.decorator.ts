import { PATH_METADATA } from "../constants";

export function Controller(path: any): ClassDecorator {

  return (target: Function) => {
    Reflect.defineMetadata(PATH_METADATA, path, target);
  }
}