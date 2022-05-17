import { StyleSheet, Pressable, View, Button, ScrollView } from "react-native";
import Constants from "expo-constants";
import Text from "../Miscellaneous/Text";
import theme from "../../theme/theme";
import { Link } from "react-router-native";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import useUser from "../../../hooks/useUser";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 20,
        paddingBottom: 10,
        backgroundColor: theme.colors.white,
        flexDirection: 'row',
    },
    tab: {
        padding: 8
    }
})

const Tab = ({ href, title, onPress }) => {
    return (
        <Pressable style={styles.tab} onPress={href ? undefined : onPress}>
            {href
                ? (
                    <Link to={href}>
                        <Text heading>{title}</Text>
                    </Link>
                )
                : (
                    
                    <Text heading>{title}</Text>
                    
                    
                )
            }

        </Pressable>
    )
}


const AppBar = () => {
    const { signOut, user } = useUser()

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
            <Tab href="/" title="Repositories" />
            {user
            ? (
                <>
                <Tab onPress={signOut} title='Log Out' />
                <Tab href={'/create-review'} title='Create Review' />
                <Tab href={'/reviews'} title='Reviews' />
                </>
            )
            : (
                <>
                <Tab href="/sign-in" title="Sign In" />
                <Tab href="/log-in" title="Log In" />
                </>
            )
            }
            </ScrollView>

        </View>
    )
}

export default AppBar