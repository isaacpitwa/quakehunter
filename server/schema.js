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
    records: [Quake]
  }


  type Mutation {
    #if False, Saving Record Failed
    saveRecord(recordID: ID!): recordUpdateResponse!
    #if False, deleting Record Failed
    deleteRecord(recordID: ID!): recordUpdateResponse!
  }

  type recordUpdateResponse {
    sucess:Boolean
    message:string
    record:[Quake]
  }
  
  
`;
module.exports = typeDefs