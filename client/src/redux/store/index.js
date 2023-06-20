import { legacy_createStore as createStore } from 'redux';
import {applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "../reducer"


export const store= createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);