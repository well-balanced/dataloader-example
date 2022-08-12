import { Resolvers } from 'generated'

const postResolver: Resolvers = {
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
