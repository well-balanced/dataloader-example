import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server'
import { PrismaClient, Prisma } from '@prisma/client'
import { resolvers, typeDefs } from './resolvers'
import { makeExecutableSchema } from '@graphql-tools/schema'

const prisma = new PrismaClient({ log: ['query'] })

prisma.$on<any>('query', async (e: Prisma.QueryEvent) => {
  console.log(`${e.query} ${e.params}`)
})

const server = new ApolloServer({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  context: ({ req }) => ({
    prisma,
    req,
  }),
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
