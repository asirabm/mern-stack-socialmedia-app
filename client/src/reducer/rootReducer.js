import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { DummyReducer } from "./dummyReducer";

export const rootReducer=combineReducers({
   postReducer:postReducer,
   dummyReducer:DummyReducer
})