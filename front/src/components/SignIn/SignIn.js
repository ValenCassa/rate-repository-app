import { MotiView } from "moti"
import { Formik } from "formik"
import * as Yup from 'yup'
import SignInForm from "../SignInForm/SignInForm"
import useSignIn from "../../../hooks/useSignIn"
import useLogIn from "../../../hooks/useLogIn"

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
})

const SignIn = ({ type }) => {
    const [signIn] = useSignIn()
    const [logIn] = useLogIn()

    return (
        <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Formik
                validationSchema={validationSchema}
                initialValues={{ username: '', password: '' }}
                onSubmit={async (values) => {
                    const { username, password } = values

                    try {
                        if (type === 'login') {
                                await logIn({ username, password })
                        }
                    } catch (e) {
                        console.log(e.message)
                    }
                }}
            >
                {({ handleSubmit }) => (
                    <SignInForm onSubmit={handleSubmit} type={type}/>
                )}

               
            </Formik>
        </MotiView>
    )
}

export default SignIn