import { applyMiddleware, createStore } from "redux";
//import { postReducer } from "../reducer/postReducer";
import { rootReducer } from "../reducer/rootReducer"; 
import thunk from "redux-thunk" 


export const store=createStore(rootReducer,applyMiddleware(thunk))