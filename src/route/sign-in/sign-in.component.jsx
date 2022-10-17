import { signInWithGooglePopup, createUserFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserFromAuth(user);
    }
    return(
        <div>
            <h1>This is the Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With google</button>
        </div>
        
    )
}

export default SignIn;