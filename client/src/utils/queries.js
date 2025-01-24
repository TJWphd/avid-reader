import { gql } from "@apollo/client";

export const GET_ME = gql`
  query getMe {
    me {
      _id
      email
      userName
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
      bookCount
    }
  }
`;
