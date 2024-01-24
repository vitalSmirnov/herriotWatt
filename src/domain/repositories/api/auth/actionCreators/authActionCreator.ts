import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    ILoginPayload,
    ILoginResponse,
    ILogoutResponse,
    IRefreshPayload,
    IRefreshResponse,
    IRegisterPayload,
    IRegisterResponse
} from "../dataSource/ILoginDataSource";
import {axiosInstance} from "../../axios/axios";

export const login = createAsyncThunk(
    'user/login',
    async (payload: ILoginPayload, thunkAPI)=> {
        return await axiosInstance.user.post<Promise<ILoginResponse>>('user/login', payload)
            .then(response => response.data)
            .catch(error => {
                return thunkAPI.rejectWithValue(error)
            })
    }
)

export const register = createAsyncThunk(
    'user/register',
    async (payload: IRegisterPayload, thunkAPI) => {
        return await axiosInstance.user.post<Promise<IRegisterResponse>>('user/register', payload)
            .then(response => response.data)
            .catch(error => {
                return thunkAPI.rejectWithValue(error)
            })
    }
)

export const refresh = createAsyncThunk(
    'user/refresh',
    async (_, thunkAPI) => {
        return await axiosInstance.user.post<Promise<IRefreshResponse>>('user/refresh', sessionStorage.getItem('refreshToken'))
            .then(response => response.data)
            .catch(error => {
                return thunkAPI.rejectWithValue(error)
            })
    }
)

export const logout = createAsyncThunk(
    'user/logout',
    async (_, thunkAPI) => {
        return await axiosInstance.user.post<Promise<ILogoutResponse>>('user/logout')
            .then(response => response.data)
            .catch(error => {
                return thunkAPI.rejectWithValue(error)
            })
    }
)

