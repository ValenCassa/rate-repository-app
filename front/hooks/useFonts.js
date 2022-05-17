import * as Font from 'expo-font';

// eslint-disable-next-line no-undef
export default fontsLoader = async () => {
    await Font.loadAsync({
        'PlusJakartaSans-Regular': require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
        'PlusJakartaSans-Medium': require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
        'PlusJakartaSans-Bold': require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
        'PlusJakartaSans-SemiBold': require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
        'PlusJakartaSans-Light': require('../assets/fonts/PlusJakartaSans-Light.ttf'),
    })
}