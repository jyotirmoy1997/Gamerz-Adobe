import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

// This is the actual value that we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser : () => null
});


// Here, we are defining a specific type of actions for the user
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER : 'SET_CURRENT_USER'
}


// This is the User Reducer object which helps to manage global state of user.
const userReducer = (state, action) => {
    const {type, payload} = action;
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                // Keep the rest of the state as it is, only update the explicitely mentioned
                // key
                ...state,
                currentUser : payload
            }
        default:
            throw new Error(`Unhandled type ${type}`)
    }
}


// Setting Up the Initial value
const INITIAL_STATE = {
    currentUser : null
}


// This is the actual provider
export const UserProvider = ({children}) => {

    // Here, we are using the reducer. The useReducer Hook
    // returns the state object and a dispatch function, which is further 
    // used to update the state of the user
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const {currentUser} = state;
    console.log(currentUser);
    const setCurrentUser = (user) => {
        dispatch({
            type : USER_ACTION_TYPES.SET_CURRENT_USER,
            payload : user
        })
    }

    /* Initially, We are initializing the User State with Null Value. Along 
    with the state, we've to also set the Context initially. The Initial context value
    is set up inside the UserContext. 
    */
    // const [currentUser, setCurrentUser] = useState(null)

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