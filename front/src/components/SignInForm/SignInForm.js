import { View, Pressable } from "react-native"
import Input from "../Miscellaneous/Input"
import Text from "../Miscellaneous/Text"
import theme from "../../theme/theme"

const SignInForm = ({ onSubmit, type }) => {
    return (
        <View>
            <Input name={'username'} placeholder='Username' />
            <Input name={'password'} placeholder='Password' secureTextEntry/>
            <Pressable onPress={onSubmit} style={{ backgroundColor: theme.background.badge, borderRadius: 3, padding: 5 }}>
                <Text subheading fontWeight={'bold'} center>{type === 'login' ? 'Log in': 'Sign in'}</Text>
            </Pressable>
        </View>
    )
}

export default SignInForm