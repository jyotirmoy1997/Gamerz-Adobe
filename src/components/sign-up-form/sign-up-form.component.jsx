import { useState } from "react";
import { createAuthUserWithEmailandPassword, createUserFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormField = {
    displayName : "",
    email : "",
    password: "",
    confirm_password : ""
}


const SignUpForm = () => {

    // Here, we're using the useState Hook to update the Different Form Fields
    const [formFields, setFormFields] = useState(defaultFormField);
    const {displayName, email, password, confirm_password} = formFields;

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
        if(password !== confirm_password){
            alert("Passwords do not match");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailandPassword(email, password);
            await createUserFromAuth(user, {displayName})
            resetFormField()
            // console.log(user);
        }
        catch(err){
            if(err.code === 'auth/email-already-in-use')
            {
                alert("Cannot create user...Email Already in use")
            }
            else{
                console.log(err);
            }
            
        }

    }

    console.log(displayName, email, password, confirm_password)
    return(
        <div>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="">Name</label>
                <input type="text" name="displayName" id="" onChange={handleChange} value={displayName} required />

                <label htmlFor="">Email</label>
                <input type="email" name="email" id="" onChange={handleChange} value={email} required />

                <label htmlFor="">Password</label>
                <input type="password" name="password" id="" onChange={handleChange} value={password} required />

                <label htmlFor="">Confirm Password</label>
                <input type="password" name="confirm_password" id="" onChange={handleChange} value={confirm_password} required />

                <button>Sign-Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;