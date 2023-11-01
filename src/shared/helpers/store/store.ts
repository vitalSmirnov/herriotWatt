import {combineReducers} from 'redux';
import authReducer from "../slices/authSlice";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    authReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];