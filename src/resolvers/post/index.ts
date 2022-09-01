import { Resolvers } from 'generated'

const postResolver: Resolvers = {
  Post: {
    comments: async (parent, _, context) => {
      const { loaders } = context
      return loaders.commentByPostIdLoader.load(parent.id)
    },
  },
  Query: {
    latestPosts: async (_, __, context) => {
      const posts = await context.prisma.post.findMany({
        take: 20,
        orderBy: { createdAt: 'desc' },
      })
      return posts
    },

    bestPosts: async (_, __, context) => {
      const posts = await context.prisma.post.findMany({
        take: 3,
        orderBy: { views: 'desc' },
      })
      return posts
    },
  },
}

export default postResolver
