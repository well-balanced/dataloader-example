import { Optional } from 'utility-types'
import { Prisma } from '@prisma/client'

export type MPost = Optional<
  Prisma.PostGetPayload<{
    include: { comments: true; user: true; _count: true }
  }>,
  keyof Prisma.PostInclude
>
