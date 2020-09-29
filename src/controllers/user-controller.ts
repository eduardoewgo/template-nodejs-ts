import { Request, Response } from 'express'
import * as userService from '../services/user-service'

export function getAll(req: Request, res: Response): void {
    // Your stuff here
    res.json(userService.getAll())
}
