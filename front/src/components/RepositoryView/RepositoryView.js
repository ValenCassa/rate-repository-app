import { StyleSheet, View, FlatList, Pressable } from "react-native"
import { useParams } from "react-router-native"
import useRepository from "../../../hooks/useRepository"
import theme from "../../theme/theme"
import Text from "../Miscellaneous/Text"
import Item from "../RepositoryList/RepositoryItem"

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row-reverse',
        backgroundColor: theme.colors.box,
    },
    rating: {
        borderWidth: 2,
        borderColor: theme.background.blue,
        borderRadius: 1000,
        aspectRatio: 1,
        flex: 10,
        height: 20,
        alignItems: 'center',
        paddingTop: 7
    },
    right: {
        flex: 90,
        paddingLeft: 10,

    },
    name: {
        fontFamily: theme.fontWeight.bold,
    },
    date: {
        fontFamily: theme.fontWeight.light,
    },
    button: {
        padding: 10,
        backgroundColor: theme.background.badge,
        alignItems: 'center',
        fontFamily: theme.fontWeight.bold
    }
})

const ItemSeparator = () => <View style={{ height: 20 }} />

export const Review = ({ review }) => {
    return (
        <View style={styles.container}>
            <View style={styles.right}>
                <Text style={styles.name}>{ review.user.username }</Text>
                <Text style={styles.date}>{ new Date(review.createdAt).toLocaleDateString() }</Text>
                <Text style={styles.content}>{ review.text }</Text>
            </View>
            <View style={styles.rating}>
                <Text style={{}}>{ review.rating }</Text>
            </View>
        </View>

    )
}

const RepositoryHeader = ({ repository }) => {

    return (
        <View>
            <Item repository={repository} />
            <Pressable onPress={() => Linking.openURL(`https://github.com/${repository.fullName}`)} style={styles.button}>
                <Text>Open on Github</Text>
            </Pressable>
        </View>  
    ) 
}

const RepositoryReview = () => {
    const { id } = useParams()
    const {data, loading } = useRepository(id)

    if (loading) return <Text>Loading...</Text>

    
    const reviews = data.repository.reviews.edges.map(edge => edge.node)

    return (
        <FlatList 
            data={reviews}
            renderItem={({ item }) => <Review review={item} />}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            style={{ marginTop: 30 }}
            ListHeaderComponentStyle={{ marginBottom: 30 }}
            ListHeaderComponent={() => <RepositoryHeader repository={data.repository}/>}
            ListFooterComponent={() => <View style={{ height: 100 }} />}
        />
    )
}

export default RepositoryReview