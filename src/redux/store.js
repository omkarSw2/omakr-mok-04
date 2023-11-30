import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { reducer as SignUpReducer } from "./Signup/reducer";
import { reducer as ForumReducer } from "./Forum/reducer";
const rootReducer = combineReducers({ SignUpReducer, ForumReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
