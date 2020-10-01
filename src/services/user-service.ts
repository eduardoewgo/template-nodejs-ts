import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()
const { user } = prisma

export function findAll(): Promise<User[]> {    
  return user.findMany()
}
