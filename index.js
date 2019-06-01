const { ApolloServer } = require('apollo-server-express')
const expressPg = require('graphql-playground-middleware-express').default
const { Client } = require('pg')
const cors = require('cors')
const express = require('express')

const { postgres: { config } } = require('./config')
const typeDefs = require('./types')
const importResolvers = require('./resolvers')

const client = new Client(config)

client.connect()

const resolvers = importResolvers()
const app = express()

const context = () => ({
  db: client
})

app.use(cors())

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
})

server.applyMiddleware({ app })

app.get('/playground', expressPg({ endpoint: 'graphql' }))

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server running at http://localhost:4000`)
})
