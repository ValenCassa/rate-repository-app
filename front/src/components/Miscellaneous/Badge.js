import { View, StyleSheet } from "react-native"
import theme from "../../theme/theme"
import Text from "./Text"

const styles = StyleSheet.create({
    badge: {
        backgroundColor: theme.background.badge,
        paddingHorizontal: 15,
        paddingVertical: 2,
        alignSelf: 'flex-start',
        borderRadius: 3,
    },
    text: {
        flexShrink: 0
    }
})

const Badge = ({ children }) => {
    return (
        <View style={{...styles.badge, marginTop: 2 }}>
            <Text style={{ fontSize: 9, alignSelf: 'flex-start' }}>{children}</Text>
        </View>
    )
}

export default Badge