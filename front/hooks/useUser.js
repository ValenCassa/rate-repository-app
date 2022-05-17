import { useApolloClient, useQuery } from "@apollo/client"
import { GET_CURRENT_USER } from "../src/graphql/queries"
import useAuth from "./useAuth"

const useUser = () => {
    const authStorage = useAuth()
    const apolloClient = useApolloClient()
    const { data } = useQuery(GET_CURRENT_USER, {
        fetchPolicy: 'cache-and-network'
    })

    const signOut = async () => {
        await authStorage.removeAccessToken()
        apolloClient.resetStore()
    }

    if (data) {
        return {
            user: data.me,
            signOut,
        }
    }

    return {
        signOut
    }
}

export default useUser