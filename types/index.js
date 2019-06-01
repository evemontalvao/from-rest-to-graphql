module.exports = `
type Query {
  user(id: ID!): User
  users: [User!]
}

type Mutation {
  createUser(
    name: String!,
    username: String!,
    followers: [ID],
    followers: [ID]
  ): User
  deleteUser(
    id: ID!
  ): User
  updateUser(
    id: ID!,
    name: String,
    username: String,
    followers: [ID],
    following: [ID]
  ): User
}

type User {
  id: ID!
  name: String!
  username: String!
  followers: [ID]
  following: [ID]
}
`
