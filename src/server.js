const { createServer } = require('http');
const express = require('express');
const { ApolloServer} = require('apollo-server-express');

module.exports = class Server {

  constructor(config) {
    this.config = config;
    this.app = new express();
    this.run = this.run.bind(this);
  }

  get application()  {
    return this.app();
  }

  bootstrap() {
   return this;
  }

  run() {
    const { port } = this.config;
    this.httpServer.listen(port, () => {
      console.log(`🚀 Server ready at http://localhost:${port}${this.server.graphqlPath}`);
    });
    return this;
  }

  async setupApollo(schema) {
    const { app } = this;

    this.server = new ApolloServer({
      ...schema,
      onHealthCheck: () => new Promise((resolve) => {
        resolve('I am Good');
      }),
     });
    this.server.applyMiddleware({ app });
    this.httpServer = createServer(app);
    this.server.installSubscriptionHandlers(this.httpServer);
    this.run();
  }


}
/*const express = require('express');
const { ApolloServer} = require('apollo-server-express');
const {typeDefs,resolvers}=require('./index');
const config=require('./config/configuration');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen(config.port, () =>
  console.log(`🚀 Server ready at http://localhost:${config.port}${server.graphqlPath}`)
);*/

