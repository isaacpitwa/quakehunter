// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema')
const server = new ApolloServer({ typeDefs});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

