import { Request, Response } from 'express'
import * as userService from '../services/user-service'

export async function findAll(req: Request, res: Response): Promise<void> {
  // Your stuff here
  const users = await userService.findAll()
  res.json(users)
}
