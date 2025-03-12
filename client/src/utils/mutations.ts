import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
   mutation Mutation($input: UserInput!) {
  addUser(input: $input) {
    user {
      username
      _id
    }
    token
  }
}
`;

export const ADD_BOOK = gql`
  mutation Mutation($book: BookInput!) {
  saveBook(book: $book) {
    _id
    username
  }
}
`;

export const DELETE_BOOK = gql`
 mutation Mutation($bookId: ID!) {
  removeBook(bookId: $bookId) {
    _id
  }
}
`;
