import Text from "../Miscellaneous/Text"
import { View, StyleSheet, Image, Pressable } from "react-native"
import theme from "../../theme/theme"
import Badge from "../Miscellaneous/Badge"
import { useNavigate } from "react-router-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.background.box,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        padding: 15,
        borderRadius: 3,
        
    },
    flexBox: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 10
    },
    flexData: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    }
})


const Item = ({ repository }) => {
    const navigate = useNavigate()
    const counter = (number) => {
        if (number > 1000) {
            return `${(number / 1000).toFixed(1)}k`
        }

        return number
    }

    return (
        <Pressable onPress={() => navigate(`/${repository.id}`)}>
            <View style={styles.container}>
                <View style={styles.flexBox}>

                    <Image 
                        source={{
                            uri: repository.ownerAvatarUrl
                        }}
                        style={styles.image}

                    />
                    <View style={{ flexShrink: 1, flexGrow: 1 }}>
                        <View style={styles.flexBox}>
                            <Text fontWeight={'medium'} style={{ marginRight: 7 }}>{repository.fullName}</Text>
                            <Badge>{repository.language}</Badge>
                        </View>
                        <Text little color={'secondary'} >{repository.description}</Text>
                    </View> 
                </View>

                <View style={styles.flexData}>
                    <View style={{ justifyContent: 'center', alignItems: 'center'  }}>
                        <Text>Stars</Text>
                        <Text center>{counter(repository.stargazersCount)}</Text>
                    </View>

                    <View>
                        <Text>Forks</Text>
                        <Text center>{counter(repository.forksCount)}</Text>
                    </View>

                    <View>
                        <Text>Reviews</Text>
                        <Text center>{counter(repository.reviewCount)}</Text>
                    </View>

                    <View>
                        <Text>Rating</Text>
                        <Text center>{counter(repository.ratingAverage)}</Text>
                    </View>
                </View>

                
                
            </View>
        </Pressable>
    )
}

export default Item