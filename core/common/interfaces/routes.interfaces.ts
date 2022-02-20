import express from 'express'
import { HttpStatus } from '../enums';

export interface IMappedRoutes {
  path: string;
  method: number;
  callback: express.Application,
  responseCode: HttpStatus
}