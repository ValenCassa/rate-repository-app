import { useQuery } from "@apollo/client"
import { GET_USER_REVIEWS } from "../src/graphql/queries"

const useUserReviews = () => {
    const { data, loading, refetch } = useQuery(GET_USER_REVIEWS, {
        fetchPolicy: "cache-and-network",
    })

    return {
        data,
        loading,
        refetch
    }
}

export default useUserReviews