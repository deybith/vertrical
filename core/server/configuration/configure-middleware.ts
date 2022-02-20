import express from 'express';
import cors from 'cors';
import { CorsConfig } from '@core/types/config';

const configureMiddleWare = (expressApp: express.Express, corsConfig: CorsConfig) => {
  const corsOptions: cors.CorsOptions = {
    origin: corsConfig.whiteList
  }

  expressApp.use(cors(corsOptions))
  expressApp.use(express.json())

  return expressApp
}

export default configureMiddleWare