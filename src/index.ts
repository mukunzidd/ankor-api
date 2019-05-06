import { GraphQLServer } from 'graphql-yoga'
// import { importSchema } from 'graphql-import'
import { Prisma } from './generated/prisma'
import { Context } from './utils'
import { Keypair } from 'stellar-sdk'
import { AES } from 'crypto-js'

const resolvers = {
  Query: {
    user(_, { username }, context: Context, info) {
      return context.db.query.user(
        {
          where: {
            username
          }
        },
        info
      )
    }
  },
  Mutation: {
    signup(_, { username }, context: Context, info) {
      const keypair = Keypair.random()

      const configCryptoScret = 'StellarIsAwesome-But-Do-Not-Put-This-Value-In-Code'

      const secret = AES.encrypt(
        keypair.secret(),
        configCryptoScret
      ).toString()

      const data = {
        username,
        stellarAccount: keypair.publicKey(),
        stellarSeed: secret
      }

      return context.db.mutation.createUser(
        { data },
        info
      )
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: 'https://eu1.prisma.sh/mukunzidd-bd50e6/ankor/dev',
      debug: true
    }),
  }),
})
server.start(() => console.log('Server is running on http://localhost:4000'))
