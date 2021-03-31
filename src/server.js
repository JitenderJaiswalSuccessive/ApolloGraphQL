const express = require('express');
const { ApolloServer} = require('apollo-server-express');
const {typeDefs,resolvers}=require('./index');
const config=require('./config/configuration');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen(config.port, () =>
  console.log(`🚀 Server ready at http://localhost:${config.port}${server.graphqlPath}`)
);

