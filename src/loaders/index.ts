import { PrismaClient } from '@prisma/client'
import { createCommentByPostIdLoader } from './comment.loader'

export function createLoaders(prisma: PrismaClient) {
  return {
    commentByPostIdLoader: createCommentByPostIdLoader(prisma),
  }
}
