import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query Me {
  me {
    email
    username
    savedBooks {
      bookId
      title
      link
      image
      authors
      description
    }
    _id
    bookCount
  }
}
`;


