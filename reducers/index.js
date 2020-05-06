import { createStore, applyMiddleware, combineReducers } from "redux";
import HomeReducer from "./HomeReducer";
import TodoReducer from "./TodoReducer";
import TodayReducer from "./TodayReducer";
import thunk from "redux-thunk"

const rootReducers = combineReducers({
    HomeReducer,
    TodoReducer,
    TodayReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk))

export default store;