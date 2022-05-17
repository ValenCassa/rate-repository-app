import { Formik } from 'formik'
import { MotiView } from 'moti'
import { useNavigate } from 'react-router-native'
import * as Yup from 'yup'
import useReview from '../../../hooks/useReview'
import ReviewForm from '../ReviewForm/ReviewForm'

const validationSchema = Yup.object().shape({
    ownerName: Yup.string().required('Required'),
    repositoryName: Yup.string().required('Required'),
    rating: Yup.number().typeError('Should be a number').required('Required').min(0, 'Rating must be greater than 0').max(100, 'Rating must be less than 100'),
    text: Yup.string()
})

const Review = () => {
    const [createReview] = useReview()
    const navigate = useNavigate()

    return (
        <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
            <Formik
                validationSchema={validationSchema}
                initialValues={{ ownerName: '', repositoryName: '', rating: 0, text: '' }}
                onSubmit={async (values) => {

                    try {
                        await createReview({...values})
                        navigate('/')
                    } catch (e) {
                        console.log(e.message)
                    }
                }}
            >
                {({ handleSubmit }) => (
                    <ReviewForm onSubmit={handleSubmit} />
                )}
            </Formik>
        </MotiView>
    )
}
export default Review