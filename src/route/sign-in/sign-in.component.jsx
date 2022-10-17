import { 
    signInWithGooglePopup, 
    createUserFromAuth, 
    signInWithFacebookPopup 
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserFromAuth(user);
    }
    return(
        <div>
            <h1>This is the Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With google</button>
            <SignUpForm/>
        </div>
        
    )
}

export default SignIn;