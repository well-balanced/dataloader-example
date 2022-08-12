import { Resolvers } from 'generated'

const postResolver: Resolvers = {
  Comment: {
    user: async (parent, __, context) => {
      return await context.prisma.user.findUnique({
        where: { id: parent.userId },
      })
    },
  },
  Post: {
    comments: async (parent, __, context) => {
      return await context.prisma.comment.findMany({
        where: { postId: parent.id },
      })
    },
  },
  Query: {
    posts: async (_, __, context) => {
      const posts = await context.prisma.post.findMany({
        take: 20,
      })
      return posts
    },
  },
}

export default postResolver
