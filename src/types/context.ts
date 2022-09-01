import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { createLoaders } from 'loaders'

export interface Context {
  prisma: PrismaClient
  req: Request
  res: Response
  loaders: ReturnType<typeof createLoaders>
}
