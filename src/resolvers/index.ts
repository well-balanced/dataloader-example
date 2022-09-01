import PostResolver from './post'
import { loadFiles } from 'graphql-import-files'

export const typeDefs = loadFiles('./**/*.{graphql,gql}')
export const resolvers = [PostResolver]
