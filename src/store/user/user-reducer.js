// Here, we are defining a specific type of actions for the user
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER : 'SET_CURRENT_USER'
}

// Setting Up the Initial value
const INITIAL_STATE = {
    currentUser : null
}


// This is the User Reducer object which helps to manage global state of user.
export const userReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    console.log(action)
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser : payload
            }
        default:
            return state // In Redux, every reducer gets every action, so whenever our action type 
            // does not match our reducer, we simply return the unmutated state.
    }
}