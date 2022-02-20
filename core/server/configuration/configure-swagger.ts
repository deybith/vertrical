import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../../js-docs/swagger.json'

const options = {
  explorer: true
}

const configureSwagger = () => {
  const expressApp = express();
  expressApp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

  return expressApp
}

export default configureSwagger