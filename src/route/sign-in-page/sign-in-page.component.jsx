import SignIn from "../../components/sign-in-form/sign-in-form.component"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import './sign-in-page.styles.css'

const SignInPage = () => {
    return(
        <div className="outer">
            <SignIn className="el-1" />
            <SignUpForm className="el-2" />
        </div>
    )
}

export default SignInPage