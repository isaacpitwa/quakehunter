// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema')
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

