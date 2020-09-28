import express, { Request, Response } from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

import { loadConfig } from './config/config'
import { load as loadUserRoutes } from './routes/user-routes';

(async () => {
  app.use(morgan('dev'))
  app.use(cors())
  app.use(bodyParser.json())

  const config = await loadConfig()

  loadUserRoutes(app)

  app.get('/health', (req: Request, res: Response): void => {
    // Change for your healthy checks
    res.send({ healthy: true })
  })

  app.listen(config.application.port, () => {
    // TODO: create proper logger utility (I would suggest gcp stackdriver :D)
    // eslint-disable-next-line no-console
    console.log(`Live at ${config.application.port}!`)
  })
})()