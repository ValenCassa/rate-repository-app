import { useMutation } from "@apollo/client"
import { LOG_IN } from "../src/graphql/mutations"
import { useApolloClient } from "@apollo/client"
import useAuth from "./useAuth"
import { useNavigate } from "react-router-native"

const useLogIn = () => {
    const apolloClient = useApolloClient()
    const navigate = useNavigate()
    const authStorage = useAuth()
    const [mutate, result] = useMutation(LOG_IN, {
        onCompleted: (data) => {
            authStorage.setAccessToken(data.authenticate.accessToken)
        }
    })

    const logIn = async ({ username, password }) => {
        const { data } = await mutate({
            variables: {
                username,
                password,
            },
        })

        if (data) {
            apolloClient.resetStore()
            navigate("/")
            return data
        }

    }

    return [logIn, result]
}

export default useLogIn