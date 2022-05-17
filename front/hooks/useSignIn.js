import { useMutation } from "@apollo/client"
import { SIGN_IN } from "../src/graphql/mutations"

const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN)

    const signIn = async ({ username, password }) => {
        const data = await mutate({
            variables: {
                username,
                password,
            },
        })

        return data
    }

    return [signIn, result]
}

export default useSignIn