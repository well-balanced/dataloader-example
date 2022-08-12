import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server'
import { PrismaClient } from '@prisma/client'
import { resolvers, typeDefs } from './resolvers'
import { makeExecutableSchema } from '@graphql-tools/schema'

const prisma = new PrismaClient()

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
