import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "../../axios/axios";
import {
    ICreateMaterialPayload,
    ICreateMaterialResponse,
    ICreateRockPayload,
    ICreateRockResponse, IUpdateMaterialPayload, IUpdateMaterialResponse, IUpdateRockPayload, IUpdateRockResponse
} from "../dataSources/IMaterialDataSource";

export const createMineral = createAsyncThunk(
    'material/mineral',
    async (payload: ICreateMaterialPayload, thunkAPI)=> {
        return await axiosInstance.main.post<Promise<ICreateMaterialResponse>>('material/mineral', payload)
            .then(response => response.data)
            .catch(error => {
                return thunkAPI.rejectWithValue(error)
            })
    }
)

export const createRock = createAsyncThunk(
    'user/register',
    async (payload: ICreateRockPayload, thunkAPI) =>
        axiosInstance.main.post<Promise<ICreateRockResponse>>('material/rock', payload)
        .then(response => response.data)
        .catch(error => {
            return thunkAPI.rejectWithValue(error)
        })

)

export const updateMineral = createAsyncThunk(
    'material/mineral/{mineral-id}',
    async (payload: IUpdateMaterialPayload, thunkAPI) =>
        axiosInstance.main.put<Promise<IUpdateMaterialResponse>>(`material/mineral/${payload.mineralId}`,payload.payload)
        .then(response => response.data)
        .catch(error => {
            return thunkAPI.rejectWithValue(error)
        })

)

export const updateRock = createAsyncThunk(
    'material/rock/{rock-id}',
    async (payload: IUpdateRockPayload, thunkAPI) => {
        return await axiosInstance.main.put<Promise<IUpdateRockResponse>>(`material/rock/${payload.rockId}`, payload.payload)
            .then(response => response.data)
            .catch(error => {
                return thunkAPI.rejectWithValue(error)
            })
    }
)

