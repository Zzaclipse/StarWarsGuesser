import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;
export const QUERY_CHARACTER = gql`
  query character($name: String!) {
    character(name: $name) {
      _id
      name
      picture
      gender
      species
      weapon
      forceSensative
    }
  }
`;

export const QUERY_CHARACTERS = gql`
  query characters {
    characters {
      _id
      name
      picture
      gender
      species
      weapon
      forceSensative
    }
  }
`;
