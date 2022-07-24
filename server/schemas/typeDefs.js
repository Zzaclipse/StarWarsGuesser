const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Character {
    _id: ID
    name: String
    picture: String
    gender: String
    species: String
    weapon: String
    forceSensative: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    characters: [Character]
    character(name: String!): Character
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCharacter(
      name: String!
      picture: String!
      gender: String!
      species: String!
      weapon: String!
      forceSensative: String!
    ): Character
    removeCharacter(charId: ID!): Character
  }
`;

module.exports = typeDefs;
