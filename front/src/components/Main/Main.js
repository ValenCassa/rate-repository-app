import { StyleSheet, View } from 'react-native'
import { Navigate, Route, Routes } from 'react-router-native'
import theme from '../../theme/theme'
import AppBar from '../AppBar/AppBar'
import RepositoryList from '../RepositoryList/RepositoryList'
import SignIn from '../SignIn/SignIn'
import { AnimatePresence } from 'moti'
import RepositoryReview from '../RepositoryView/RepositoryView'
import Review from '../Review/Review'
import UserReviews from '../UserReviews/UserReviews'

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: theme.background.main,
        padding: 15,
    }
})

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <AnimatePresence exitBeforeEnter initial>
                <Routes>
                    <Route path='/' element={<RepositoryList />} exact />
                    <Route path='/:id' element={<RepositoryReview />} exact />
                    <Route path='/sign-in' element={<SignIn type={'sign-in'}/>} exact />
                    <Route path='/log-in' element={<SignIn type={'login'}/>} exact />
                    <Route path='/reviews' element={<UserReviews />} exact />
                    <Route path='/create-review' element={<Review />} exact />
                    <Route path='*' element={<Navigate to={'/'} replace />} />
                </Routes>
            </AnimatePresence>
        </View>
    )
}

export default Main