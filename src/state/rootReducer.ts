import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import postSlice from "./slice/postSlice";

const rootReducer = combineReducers({
    counter: counterSlice,
    posts :  postSlice
})

const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;