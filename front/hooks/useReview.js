import { useApolloClient, useMutation } from "@apollo/client"
import { CREATE_REVIEW } from "../src/graphql/mutations"

const useReview = () => {
    const apolloClient = useApolloClient()
    const [mutate, result] = useMutation(CREATE_REVIEW)
    
    const createReview = async ({ ownerName, repositoryName, rating, text }) => {
        const data = await mutate({
            variables: {
                ownerName,
                repositoryName,
                rating: Number(rating),
                text,
            },
        })

        apolloClient.resetStore()

        return data
    }

    return [
        createReview, result
    ]
}

export default useReview