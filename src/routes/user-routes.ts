import express from 'express'

// eslint-disable-next-line new-cap
const router = express.Router()

import * as userController from '../controllers/user-controller'

export function load(app: express.Express): void {
  router.get('/all', userController.getAll)
  app.use('/users', router)
}
