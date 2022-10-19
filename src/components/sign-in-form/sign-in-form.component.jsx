import { 
    signInWithGooglePopup, 
    createUserFromAuth ,
    signInAuthUserWithEmailandPassword
} from "../../utils/firebase/firebase.utils";

import './sign-in-form.component.css'
import GoogleButton from 'react-google-button'
import { useState } from "react";

const defaultFormField = {
    email : "",
    password: "",
}

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserFromAuth(user);
    }

    // Here, we're using the useState Hook to update the Different Form Fields
    const [formFields, setFormFields] = useState(defaultFormField);
    const {email, password} = formFields;

    const resetFormField = () => {
        setFormFields(defaultFormField);
    }

    // This function changes the existing form fields upon entering some input data
    const handleChange = (event) => {
        const {name, value} = event.target;
        // console.log(name, value);
        setFormFields({...formFields, [name]: value}); // Spread Operator is used to Change only the field that is invoking the function
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const {user} = await signInAuthUserWithEmailandPassword(email, password);
            console.log(user);
            resetFormField();
            // console.log(user);
        }
        catch(err){
            if(err.code === 'auth/user-not-found')
            {
                alert("User Not Found")
            }
            else if(err.code === 'auth/wrong-password'){
                alert("Incorrect Password")
            }
            else{
                console.log(err);
            }
            
        }

    }
    return(
        <div >
            <form className="wrapper-sign-in" onSubmit={handleSubmit} action="">
                <div className="el1">I already have an account</div>
                <div className="el2">Sign-In with your email and password</div>
                <div className="el3">Email</div>
                <input className="el4" type="email" name="email" onChange={handleChange} value={email} required />
                <div className="el5">Password</div>
                <input className="el6" type="password" name="password" onChange={handleChange} value={password} required />
                <button className="el7">Sign-In</button>
                <GoogleButton className="el8" onClick={logGoogleUser} />
            </form>
            
        </div>
        
    )
}

export default SignIn;