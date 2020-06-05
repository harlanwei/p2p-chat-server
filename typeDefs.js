const { gql } = require("apollo-server");

module.exports = gql`
  type Message {
    content: String
    sender: String
    receiver: String
    time: String
    type: Int
  }

  input MessageInput {
    content: String!
    sender: String!
    receiver: String!
    time: String!
    type: Int!
  }

  type User {
    username: String
    password: String
    avatar: Int
  }

  type Group {
    id: String
    members: [String]
    title: String
  }

  type Query {
    Login(username: String, password: String): User
    MessagesBetween(participantA: String, participantB: String): [Message]
    RetrieveGroupInfo(id: String!): Group
  }

  type Mutation {
    Register(username: String!, password: String!): User
    ChangeAvatar(username: String!, avatarId: Int!): User
    SaveMessages(initiator: String!, messages: [MessageInput]): String
    RemoveGroupMembers(groupId: String!, memberUsernames: [String]!): Group
    AddGroupMembers(groupId: String!, memberUsernames: [String]!): Group
  }
`;
