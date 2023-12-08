import {combineReducers} from 'redux';
import authReducer from "../auth/slices/authSlice";
import materialReducer from "../material/slices/materialSlice";
import projectReducer from "../project/slices/projectSlice";
import segmentationReducer from "../segmentation/slices/segmentSlice";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    authReducer,
    segmentationReducer,
    materialReducer,
    projectReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];