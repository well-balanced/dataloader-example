import { PrismaClient } from '@prisma/client'
import DataLoader from 'dataloader'

export const createCommentByPostIdLoader = (prisma: PrismaClient) =>
  new DataLoader(async (postIds: number[]) => {
    const comments = await prisma.comment.findMany({
      where: { postId: { in: postIds } },
    })

    return postIds.map((postId) =>
      comments.filter((comment) => comment.postId === postId),
    )
  })
