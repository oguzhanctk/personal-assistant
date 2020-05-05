import { createStore, applyMiddleware, combineReducers } from "redux";
import HomeReducer from "./HomeReducer";
import thunk from "redux-thunk"

const rootReducers = combineReducers({
    HomeReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk))

export default store;