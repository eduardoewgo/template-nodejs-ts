import { Request, Response } from 'express'
import * as userController from '../user-controller'

jest.mock('../../services/user-service', () => ({
  getAll: () => ({}),
}))

describe('getAll', () => {
  it('should return an array of Users or empty', async () => {
    const req = {} as Request
    const res = { json: jest.fn() } as unknown as Response

    await userController.getAll(req, res)
    expect(res.json).toHaveBeenCalledWith({})
  })
})
