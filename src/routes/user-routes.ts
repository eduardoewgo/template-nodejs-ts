import express from 'express'

// eslint-disable-next-line new-cap
const router = express.Router()

import * as userController from '../controllers/user-controller'

router.get('/all', userController.findAll)

export default router
