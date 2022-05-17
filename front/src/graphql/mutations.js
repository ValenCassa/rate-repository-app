import { gql } from '@apollo/client'

export const SIGN_IN = gql`
    mutation SignIn($username: String!, $password: String!) {
        createUser(user: { username: $username, password: $password }) {
            id,
            username
        }
    }
`

export const LOG_IN = gql`
    mutation LogIn($username: String!, $password: String!) {
        authenticate(credentials: { username: $username, password: $password }) {
            accessToken,
            user {
                username
            }
        }
    }
`

export const CREATE_REVIEW = gql`
    mutation CreateReview($repositoryName: String!, $text: String!, $rating: Int!, $ownerName: String!) {
        createReview(review: { repositoryName: $repositoryName, text: $text, rating: $rating, ownerName: $ownerName }) {
            id
        }
    }
`

export const DELETE_REVIEW = gql`
    mutation DeleteReview($id: ID!) {
        deleteReview(id: $id)
    }
`
