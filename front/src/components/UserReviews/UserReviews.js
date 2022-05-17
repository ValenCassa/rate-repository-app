import { FlatList, Pressable, View, Alert } from "react-native"
import useUserReviews from "../../../hooks/useUserReviews"
import Text from "../Miscellaneous/Text"
import { Review } from "../RepositoryView/RepositoryView"
import * as Linking from "expo-linking"
import { useNavigate } from "react-router-native"
import { useMutation } from "@apollo/client"
import { DELETE_REVIEW } from "../../graphql/mutations"

const Button = ({ action, text, deleteStyle }) => {
    return (
        <Pressable onPress={action} style={{
            padding: 2,
        }}>
            <Text 
                style={{
                    color: deleteStyle ? 'brown' : 'white',
                }} 
                subheading 
                fontWeight={'bold'} 
                center>
                {text}
            </Text>
        </Pressable>
    )
}

const UserReviews = () => {
    const { data, loading, refetch } = useUserReviews()
    const [deleteReview] = useMutation(DELETE_REVIEW)

    if(loading) return <Text>Loading...</Text>

    const reviews = data.me.reviews.edges.map(edge => edge.node)

    console.log(reviews.map(review => review))

    const onDeleteAlert = (id) => {
        console.log(id)
        Alert.alert('Are you sure you want to delete this review?', '', [
            {
                text: 'Yes',
                onPress: async () => deleteReview({ variables: { id } }).then(() => refetch()),
            },
            {
                text: 'No',
                onPress: () => {},
                style: 'cancel',
            }
        ])
    }

    return (
        <View>
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            flex: 20
                        }}>
                            <Review review={item}/>
                        </View>
                        <View>
                            <Button text={'View repository'} action={() => Linking.openURL(`https://github.com/${item.repository.fullName}`)} />
                            <Button deleteStyle={true} text={'Delete review'} action={() => onDeleteAlert(item.id)} />
                        </View>
                    </View>
                )}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                keyExtractor={(item, index) => index.toString()}
                style={{
                    marginTop: 20
                }}
            />
        </View>
    )
}

export default UserReviews