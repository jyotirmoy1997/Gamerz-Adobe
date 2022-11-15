import { compose, applyMiddleware } from "redux";
import { createStore} from 'redux'

// Logger is a tool that helps us to visualize how the states change during an action
import logger from "redux-logger";

// Importing our root reducer
import { rootReducer } from "./root-reducer";

// Defining Middlewares - This is used to intercept actions
const middleWares = [logger];


// Here we are enhancing the power of our store using a composed enhancer comprising of middlewares
const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers);