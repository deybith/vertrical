import express from 'express'
import { CorsConfig } from "./config";

export type TLangs = Record<string, unknown>


export interface ApiFunction {
  (): express.Express
}

export interface TranslateFunction {
  (text:string, position: string, params?: Record<string, string> | undefined): string
}

export interface ServerParamsInterface {
  corsConfig?: CorsConfig;
}

export interface IAuthRequest extends express.Request {
  jwt?: Record<string, unknown>;
}

export interface ILangRequest extends express.Request {
  translate: TranslateFunction;
}


export interface ServerFunctionInterface {
  (AppModule: any, param: ServerParamsInterface): Promise<Server>;
}


export interface Server {
  adapter: (adapter: (arg0: express.Application) => void) => void
  listen: (port: number) => void
}