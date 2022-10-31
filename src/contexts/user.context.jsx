import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

// This is the actual value that we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser : () => null
});

// This is the actual provider
export const UserProvider = ({children}) => {

    /* Initially, We are initializing the User State with Null Value. Along 
    with the state, we've to also set the Context initially. The Initial context value
    is set up inside the UserContext. 
    */
    const [currentUser, setCurrentUser] = useState(null)

    /* Value is the default value that is going to be passed on to every
    children that needs to use this context. All the children are wrapped inside 
    the UserContext.Provider tag*/
    const value = {currentUser, setCurrentUser}

    /* This Hook is invoked whenever the component mounts.
    onAuthStateChangedListener returns a function that indicates whether an user is logged
    in or not*/

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user);
        })
        return unsubscribe;
    }, [])

    // value is passed onto children as props
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}