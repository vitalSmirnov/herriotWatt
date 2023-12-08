import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {login, logout, refresh, register} from "../actionCreators/authActionCreator";
import {ILoginResponse, ILogoutResponse, IRefreshResponse, IRegisterResponse} from "../dataSource/ILoginDataSource";


interface IAuth{
    token: string | null,
    refreshToken: string | null,
    isLoading: boolean,
    error: string
}


const initialState: IAuth = {
    token: null,
    refreshToken: '',
    isLoading: false,
    error: ''
}

export const authorizationsSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers:{
        [login.pending.type]: (state)=> {
            state.token = null;
            state.isLoading = true;
        },
        [login.rejected.type]: (state, action)=> {
            state.token = null;
            state.error = action.payload;
            state.isLoading = false;
        },
        [login.fulfilled.type]: (state, action: PayloadAction<ILoginResponse>)=> {
            state.token = action.payload.token;
            sessionStorage.setItem("token", action.payload.token);
            sessionStorage.setItem("refreshToken", action.payload.refreshToken);
            state.isLoading = false;
            state.error = 'success';

        },

        [register.pending.type]: (state)=> {
            state.token = null;
            state.isLoading = true;
        },
        [register.rejected.type]: (state, action)=> {
            state.token = null;
            state.error = action.payload;
            state.isLoading = false;
        },
        [register.fulfilled.type]: (state, action: PayloadAction<IRegisterResponse>)=> {
            state.isLoading = false;
            state.error = 'success';

        },

        [logout.pending.type]: (state)=> {
            state.token = null;
            state.isLoading = true;
        },
        [logout.rejected.type]: (state, action)=> {
            state.token = null;
            state.error = action.payload;
            state.isLoading = false;
        },
        [logout.fulfilled.type]: (state, action: PayloadAction<ILogoutResponse>)=> {
            state.token = null;
            state.isLoading = false;
            state.error = '';
        },

        [refresh.fulfilled.type]: (state, action: PayloadAction<IRefreshResponse>)=> {
            state.token = action.payload.token;
            state.refreshToken = action.payload.refreshToken;
            sessionStorage.setItem("token", action.payload.token);
            sessionStorage.setItem("refreshToken", action.payload.refreshToken);
            state.isLoading = false;
            state.error = '';
        },
    }
})

export default authorizationsSlice.reducer;