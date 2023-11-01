import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IToken} from "../models/IToken";
import {BASE_URL} from "./helpers/BaseUrl";
import {IUserCredentials} from "../models/IUserCredentials";



const instance = axios.create({
    baseURL: BASE_URL,
});
instance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
});

export const login = createAsyncThunk(
    'login',
    async (data: IUserCredentials, thunkAPI) => {
        try {
            const response = await instance.post<IToken>('auth/login', data)
            return response.data.token;
        } catch (e) {
            return thunkAPI.rejectWithValue("Ошибка")
        }
    }
)

export const logout = createAsyncThunk(
    'logout',
    async (userId: string, thunkAPI) => {
        try{
            const response = await instance.post(`/auth/logout/${userId}`)
            return response.data;
        }
        catch(e){
            return thunkAPI.rejectWithValue("Ошибка")
        }
    }
)

