import { useQuery, fetchMore } from "@apollo/client";
import { GET_REPOSITORIES } from "../src/graphql/queries";

export const useRepositories = (searchKeyword = '') => {
    const variables = {
        searchKeyword,
        first: 20,
    }

    const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network",
        variables
      });

      const handleFetchMore = () => {
          const canFetchMore = !loading && data.repositories.pageInfo.hasNextPage;

          if (!canFetchMore) {
              return
          }

          fetchMore({
              variables: {
                  after: data.repositories.pageInfo.endCursor,
                  ...variables
              }
          })
      }


    return {
        data,
        loading,
        fetchMore: handleFetchMore,
        ...result
    }
}