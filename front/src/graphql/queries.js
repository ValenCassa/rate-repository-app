import { gql } from "@apollo/client";

const REPO_FRAGMENT = gql`
  fragment RepoFragment on Repository {
    id,
    ownerAvatarUrl,
    fullName,
    description,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    language,
    createdAt
  }
`

export const GET_REPOSITORIES = gql`
  query($searchKeyword: String!, $first: Int, $after: String) {
    repositories(searchKeyword: $searchKeyword, first: $first, after: $after) {
      edges {
        node {
          ...RepoFragment
        }
        cursor
      }
      pageInfo {
        endCursor,
        hasNextPage,
        startCursor
      }
    }
  }

  ${REPO_FRAGMENT}
`

export const GET_REPOSITORY = gql`
  query($id: ID!) {
    repository(id: $id) {
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
      ...RepoFragment,

    }
  }
  ${REPO_FRAGMENT}
`

export const GET_CURRENT_USER = gql`
  query currentUser {
    me {
      id,
      username
    }
  }
`

export const GET_FILTERED_REPOSITORIES = gql`
  query($searchKeyword: String!) {
    repositories(searchKeyword: $searchKeyword) {
      edges {
        node {
          ...RepoFragment
        }
      }
    }
  }

  ${REPO_FRAGMENT}
`