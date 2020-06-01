const { gql } = require("apollo-server");

module.exports = gql`
  type Message {
    content: String
    sender: String
    receiver: String
    time: String
    type: Int
  }

  type User {
    username: String
    password: String
    avatar: String
    nickname: String
  }

  type Query {
    MessagesBetween(participantA: String, participantB: String): [Message]
    Login(username: String, password: String): User
  }

  type Mutation {
    Register(username: String!, password: String!, nickname: String!): User
    ChangeNickname(username: String!, nickname: String!): User
  }
`;
