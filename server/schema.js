const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Query {
    quakes: [Quake]!
    quake(id:ID!):Quake

  }

  type Quake {
    id:ID!
    location: String
    magnitude:Float
    when:String
    time:String
  }
  type User {
    id:ID!
    name: String!
    email: String!
    password:String!
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }
  
  
`;
module.exports = typeDefs