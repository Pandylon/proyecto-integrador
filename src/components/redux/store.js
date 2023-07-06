import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from "./reducer"; //recibe al reducer 
import thunkMiddleware from "redux-thunk"

const composeEnhancer=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store= createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
)

export default store;