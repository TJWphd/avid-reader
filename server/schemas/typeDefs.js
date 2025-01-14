const typeDefs = `
  type Query {
    me: User
  }

input BookInput {
   bookId: String!
   authors: [String]
   description: String!
   title: String!
   image: String
   link: String
}

  type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth 
  saveBook(bookInput: BookInput): User
  }
  
type Book {
    _id: ID!
   bookId: String!
   authors: [String]
   description: String!
   title: String!
   image: String
   link: String
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }


  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
