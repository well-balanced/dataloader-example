import { Optional } from 'utility-types'
import { Prisma } from '@prisma/client'

export type MPost = Optional<
  Prisma.PostGetPayload<{
    include: { comments: true; author: true; _count: true }
  }>,
  keyof Prisma.PostInclude
>

export type MComment = Optional<
  Prisma.CommentGetPayload<{ include: { user: true; post: true } }>,
  keyof Prisma.CommentInclude
>
