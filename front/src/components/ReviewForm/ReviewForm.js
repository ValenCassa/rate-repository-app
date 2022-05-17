import { Pressable, View } from 'react-native'
import theme from '../../theme/theme'
import Input from '../Miscellaneous/Input'
import Text from '../Miscellaneous/Text'

const ReviewForm = ({ onSubmit }) => {
    return (
        <View>
            <Input name={'ownerName'} placeholder={'Owner name'} />
            <Input name={'repositoryName'} placeholder={'Repository name'} />
            <Input name={'rating'} placeholder={'Rating between 0 - 100'} />
            <Input name={'text'} placeholder={'Review'} multiline />
            <Pressable onPress={onSubmit} style={{ backgroundColor: theme.background.badge, borderRadius: 3, padding: 5 }} >
                <Text subheading fontWeight={'bold'} center>Submit</Text>
            </Pressable>
        </View>
    )
}

export default ReviewForm